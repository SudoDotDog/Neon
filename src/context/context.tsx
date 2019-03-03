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

    private _ref: HTMLDivElement | null = null;
    private _bindingDocument: boolean = false;

    private readonly _contextMenuStyle: Classes = NeonContextMenuStyle.use();

    public constructor(props: NeonContextMenuProviderProps) {

        super(props);

        this._handleDocumentClick = this._handleDocumentClick.bind(this);
        this._openContextMenu = this._openContextMenu.bind(this);
    }

    public componentWillUnmount() {

        this._debindDocument();
    }

    public render(): React.ReactNode {

        return (
            <NeonContextMenuContext.Provider
                value={{
                    openContextMenu: this._openContextMenu,
                    width: this._ref ? this._ref.offsetWidth : undefined,
                    height: this._ref ? this._ref.offsetHeight : undefined,
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
                ref={(ref: HTMLDivElement) => this._ref = ref}
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

    private _bindDocument() {

        if (!this._bindingDocument) {
            document.addEventListener('click', this._handleDocumentClick);
            document.addEventListener('contextmenu', this._handleDocumentClick);

            this._bindingDocument = true;
        }
    }

    private _debindDocument() {

        if (this._bindingDocument) {
            document.removeEventListener('click', this._handleDocumentClick);
            document.removeEventListener('contextmenu', this._handleDocumentClick);

            this._bindingDocument = false;
        }
    }

    private _createElementClickFunction(onClick?: () => void) {

        return () => {

            this._handleCloseMenu();
            if (onClick) {
                onClick();
            }
        };
    }

    private _handleDocumentClick(event: MouseEvent) {

        if (!this._ref) {
            return;
        }

        if (this.state.triggered) {
            event.preventDefault();
            event.stopPropagation();
            this._handleCloseMenu();
        }
    }

    private _handleCloseMenu() {

        this.setState({
            triggered: false,
        });
        this._debindDocument();
    }

    private _openContextMenu(x: number, y: number, list: NeonMenuItemElement[]) {

        this.setState({
            triggered: true,
            list,
            x,
            y,
        });
        this._bindDocument();
    }
}

export const NeonContextMenuProvider: ThemedComponent<NeonContextMenuProviderProps> = withConsumer<NeonContextMenuProviderProps>(NeonContextMenuProviderBase);
