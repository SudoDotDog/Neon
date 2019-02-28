/**
 * @author WMXPY
 * @namespace Neon_Menu
 * @description Context Menu
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { SIZE } from "../declare/index";
import { NeonMenuItem } from "./item";
import { NeonMenu } from "./menu";
import { NeonContextMenuStyle } from "./style/context";

export type NeonContextMenuProps = {

    readonly size?: SIZE;

    readonly children?: any;
} & BoxProps & ThemeProps;

export type NeonContextMenuStates = {

    readonly triggered: boolean;
};

export class NeonContextMenuBase extends React.Component<NeonContextMenuProps, NeonContextMenuStates> {

    public readonly state: NeonContextMenuStates = {

        triggered: false,
    };

    private _ref: HTMLDivElement | null = null;

    private readonly _contextMenuStyle: Classes = NeonContextMenuStyle.use();

    public constructor(props: NeonContextMenuProps) {

        super(props);

        this._handleContextMenu = this._handleContextMenu.bind(this);
    }

    public render(): React.ReactNode {

        return (
            <NeonBox
                {...boxProps(
                    this.props,
                    this._contextMenuStyle.wrap,
                )}
                divAttributes={{
                    onContextMenu: this._handleContextMenu,
                }}
            >
                {this.props.children}
                {this._renderMenu()}
            </NeonBox>
        );
    }

    private _renderMenu(): React.ReactNode {

        if (!this.state.triggered) {
            return null;
        }

        return (
            <div
                ref={(ref: HTMLDivElement) => this._ref = ref}
                className={this._contextMenuStyle.menu}
                style={{
                    position: 'fixed',
                }}
            >
                <NeonMenu>
                    <NeonMenuItem>Hello</NeonMenuItem>
                </NeonMenu>
            </div>
        );
    }

    private _handleContextMenu(event: React.MouseEvent<HTMLDivElement>): void {

        event.preventDefault();
        event.stopPropagation();

        this.setState({
            triggered: true,
        });

        if (!this._ref) {
            return;
        }

        const ref: HTMLDivElement = this._ref;

        const X: number = event.clientX;
        const Y: number = event.clientY;
        const viewWidth: number = window.innerWidth;
        const viewHeight: number = window.innerHeight;
        const width: number = ref.offsetWidth;
        const height: number = ref.offsetHeight;

        if (viewWidth - X > width) {
            console.log(1);
            ref.style.left = `${X}px`;
        } else {
            ref.style.left = `${X - width}px`;
        }

        if (viewHeight - Y > height) {
            console.log(2);
            ref.style.top = `${Y}px`;
        } else {
            ref.style.top = `${Y - height}px`;
        }
    }
}

export const NeonContextMenu: ThemedComponent<NeonContextMenuProps> = withConsumer<NeonContextMenuProps>(NeonContextMenuBase);
