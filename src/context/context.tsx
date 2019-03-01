/**
 * @author WMXPY
 * @namespace Neon_Context
 * @description Context Menu
 */

import { Classes } from "jss";
import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonMenu, NeonMenuItem, NeonMenuItemElement } from "../menu";
import { getDefaultNeonContext, NeonContext } from "./declare";
import { NeonContextMenuStyle } from "./style/context";

export type NeonContextMenuProviderProps = {

    readonly children?: any;
} & BoxProps & ThemeProps;

export type NeonContextMenuProviderStates = {

    readonly triggered: boolean;
    readonly list: NeonMenuItemElement[];
    readonly x: number;
    readonly y: number;
};

export const NeonContextMenuContext: React.Context<NeonContext> = React.createContext<NeonContext>(getDefaultNeonContext());

export class NeonContextMenuProviderBase extends React.Component<NeonContextMenuProviderProps, NeonContextMenuProviderStates> {

    public readonly state: NeonContextMenuProviderStates = {

        triggered: false,
        list: [],
        x: 0,
        y: 0,
    };

    private readonly _contextMenuStyle: Classes = NeonContextMenuStyle.use();

    public constructor(props: NeonContextMenuProviderProps) {

        super(props);

        this._openContextMenu = this._openContextMenu.bind(this);
    }

    public render(): React.ReactNode {

        return (
            <NeonContextMenuContext.Provider
                value={{
                    openContextMenu: this._openContextMenu,
                }}
            >
                {this.props.children}
                {this._renderMenu()}
            </NeonContextMenuContext.Provider>
        );
    }

    private _renderMenu(): React.ReactNode {

        if (!this.state.triggered) {
            return null;
        }

        return (
            <div
                className={this._contextMenuStyle.menu}
                style={{
                    position: 'fixed',
                    top: this.state.y,
                    left: this.state.x,
                }}
            >
                <NeonMenu>
                    {this._renderItems()}
                </NeonMenu>
            </div>
        );
    }

    private _renderItems(): React.ReactNode {

        if (!this.state.list) {
            return null;
        }

        return this.state.list.map((element: NeonMenuItemElement, index: number) =>
            (<NeonMenuItem
                key={element.key || index}
                onClick={this._createElementClickFunction(element.onClick)}>
                {element.children}
            </NeonMenuItem>),
        );
    }

    private _createElementClickFunction(onClick?: () => void) {

        return () => {

            this._handleCloseMenu();
            if (onClick) {
                onClick();
            }
        };
    }

    private _handleCloseMenu() {

        this.setState({
            triggered: false,
        });
    }

    private _openContextMenu(x: number, y: number, list: NeonMenuItemElement[]) {

        this.setState({
            triggered: true,
            list,
            x,
            y,
        });
    }
}

export const NeonContextMenuProvider: ThemedComponent<NeonContextMenuProviderProps> = withConsumer<NeonContextMenuProviderProps>(NeonContextMenuProviderBase);
