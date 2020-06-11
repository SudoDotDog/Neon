/**
 * @author WMXPY
 * @namespace Neon_Context
 * @description Triggerable
 */

import * as React from "react";
import { BoxProps } from "../#common/declare";
import { NeonMenuItemElement } from "../menu/index";
import { ContextedComponent, ContextProps, withContextMenu } from "./connect";

export type NeonContextMenuProps = {

    readonly list?: NeonMenuItemElement[];
    readonly children?: any;
} & BoxProps & ContextProps;

export class NeonContextMenuBase extends React.Component<NeonContextMenuProps> {

    public render(): React.ReactNode {

        return (
            <div
                onContextMenu={this._handleContextMenu.bind(this)}
                style={this.props.style}
                className={this.props.className}
            >
                {this.props.children}
            </div>
        );
    }

    private _handleContextMenu(event: React.MouseEvent<HTMLDivElement>): void {

        event.preventDefault();
        event.stopPropagation();

        if (!this.props.list) {
            return;
        }

        const X: number = event.clientX;
        const Y: number = event.clientY;

        this.props.context.openContextMenu(
            this._getPositionX(X),
            this._getPositionY(Y),
            this.props.list,
        );
    }

    private _getPositionX(x: number): number {

        const viewWidth: number = window.innerWidth;
        const width: number = this.props.context.width || 0;

        if (viewWidth - x > width) {
            return x;
        } else {
            return x - width;
        }
    }

    private _getPositionY(y: number): number {

        const viewHeight: number = window.innerHeight;
        const height: number = this.props.context.height || 0;

        if (viewHeight - y > height) {
            return y;
        } else {
            return y - height;
        }
    }
}

export const NeonContextMenu: ContextedComponent<NeonContextMenuProps> = withContextMenu<NeonContextMenuProps>(NeonContextMenuBase);
