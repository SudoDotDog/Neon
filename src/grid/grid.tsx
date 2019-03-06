/**
 * @author WMXPY
 * @namespace Neon_Grid
 * @description Grid
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemeProps } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonGridStyle } from "./style/grid";

export type NeonGridProps = {

    readonly width?: number;
    readonly height?: number;

    readonly gap?: string;

    readonly children?: any;
} & ThemeProps & BoxProps;

export type NeonGridStates = {

};

export class NeonGridBase extends React.Component<NeonGridProps, NeonGridStates> {

    public readonly state: NeonGridStates = {
    };

    private readonly _gridStyle: Classes = NeonGridStyle.use();

    public render(): JSX.Element {

        const gap: string = this.props.gap || '0.5rem';

        return (
            <NeonBox
                ignoreTheme
                {...boxProps(
                    this.props,
                    this._gridStyle.grid,
                )}
                style={{
                    display: 'grid',
                    gridGap: gap,
                    gridTemplateColumns: this._getEdgeProperty(this.props.width),
                    gridTemplateRows: this._getEdgeProperty(this.props.height),
                }}
            >
                {this.props.children}
            </NeonBox>
        );
    }

    private _getEdgeProperty(size?: number): string {

        if (size) {
            return `repeat(${size}, auto)`;
        }

        return 'auto';
    }
}

export const NeonGrid: React.ComponentType<NeonGridProps> = NeonGridBase;
