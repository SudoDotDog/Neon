/**
 * @author WMXPY
 * @namespace Neon_Grid
 * @description Grid Element
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonGridStyle } from "./style/grid";

export type NeonGridElementProps = {

    readonly x?: number;
    readonly y?: number;
    readonly width?: number;
    readonly height?: number;

    readonly children?: any;
} & ThemeProps & BoxProps;

export class NeonGridElementBase extends React.Component<NeonGridElementProps> {

    private readonly _gridStyle: Classes = NeonGridStyle.use();

    public render(): JSX.Element {

        return (
            <NeonBox
                {...boxProps(
                    this.props,
                    this._gridStyle.element,
                )}
                style={{
                    ...this.props.style,
                    paddingBottom: `${this._getPaddingExpendSize()}%`,
                    gridColumn: this._getColumnStyle(),
                    gridRow: this._getRowStyle(),
                }}
            >
                <div className={this._gridStyle.inner}>
                    {this.props.children}
                </div>
            </NeonBox>
        );
    }

    private _getPaddingExpendSize(): number {

        const oneHundred: number = 100;
        const width: number = this.props.width || 1;
        const height: number = this.props.height || 1;

        return oneHundred / (width / height);
    }

    private _getColumnStyle(): string | undefined {

        if (!this.props.x) {
            return undefined;
        }

        if (!this.props.width) {
            return this.props.x.toString();
        }

        return `${this.props.x} / span ${this.props.width}`;
    }

    private _getRowStyle(): string | undefined {

        if (!this.props.y) {
            return undefined;
        }

        if (!this.props.height) {
            return this.props.y.toString();
        }

        return `${this.props.y} / span ${this.props.height}`;
    }
}

export const NeonGridElement: ThemedComponent<NeonGridElementProps> = withConsumer<NeonGridElementProps>(NeonGridElementBase);
