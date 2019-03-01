/**
 * @author WMXPY
 * @namespace Neon_Context
 * @description Triggerable
 */

import * as React from "react";
import { BoxProps } from "../#common/declare";
import { ContextedComponent, ContextProps, withContextMenu } from "./connect";

export type NeonContextMenuProps = {

    readonly children?: any;
} & BoxProps & ContextProps;

export class NeonContextMenuBase extends React.Component<NeonContextMenuProps> {

    public constructor(props: NeonContextMenuProps) {

        super(props);

        this._handleContextMenu = this._handleContextMenu.bind(this);
    }

    public render(): React.ReactNode {

        return (
            <div
                onContextMenu={this._handleContextMenu}
            >
                {this.props.children}
            </div>
        );
    }

    private _handleContextMenu(event: React.MouseEvent<HTMLDivElement>): void {

        event.preventDefault();
        event.stopPropagation();

        const X: number = event.clientX;
        const Y: number = event.clientY;
        // const viewWidth: number = window.innerWidth;
        // const viewHeight: number = window.innerHeight;
        // const width: number = ref.offsetWidth;
        // const height: number = ref.offsetHeight;

        // if (viewWidth - X > width) {
        //     console.log(1);
        //     ref.style.left = `${X}px`;
        // } else {
        //     ref.style.left = `${X - width}px`;
        // }

        // if (viewHeight - Y > height) {
        //     console.log(2);
        //     ref.style.top = `${Y}px`;
        // } else {
        //     ref.style.top = `${Y - height}px`;
        // }

        this.props.context.openContextMenu(X, Y, []);
    }
}

export const NeonContextMenu: ContextedComponent<NeonContextMenuProps> = withContextMenu<NeonContextMenuProps>(NeonContextMenuBase);
