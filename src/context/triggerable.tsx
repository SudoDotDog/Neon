/**
 * @author WMXPY
 * @namespace Neon_Context
 * @description Triggerable
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { NeonMenuItemElement } from "../menu/index";
import { ContextedComponent, ContextProps, withContextMenu } from "./connect";

export type NeonContextMenuProps = {

    readonly list?: NeonMenuItemElement[];
    readonly children?: any;
} & BoxProps & ContextProps;

export class NeonContextMenuBase extends React.Component<NeonContextMenuProps> {

    public constructor(props: NeonContextMenuProps) {

        super(props);

        this._handleContextMenu = this._handleContextMenu.bind(this);
    }

    public render(): React.ReactNode {

        return (
            <NeonBox
                divAttributes={{
                    onContextMenu: this._handleContextMenu,
                }}
                {...boxProps(this.props)}
            >
                {this.props.children}
            </NeonBox>
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

        this.props.context.openContextMenu(X, Y, this.props.list);
    }
}

export const NeonContextMenu: ContextedComponent<NeonContextMenuProps> = withContextMenu<NeonContextMenuProps>(NeonContextMenuBase);
