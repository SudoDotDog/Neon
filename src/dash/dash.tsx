/**
 * @author WMXPY
 * @namespace Neon_Dash
 * @description Dash
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { SIZE, WIDTH } from "../declare";
import { NeonDashStyle } from "./style/dash";

export type NeonDashProps = {

    readonly onClick?: () => void;

    readonly disabled?: boolean;
    readonly tabIndex?: number;
    readonly width?: WIDTH;
    readonly size?: SIZE;

    readonly buttonClassName?: string;

    readonly children?: any;
} & ThemeProps & BoxProps;

export class NeonDashBase extends React.Component<NeonDashProps> {

    private readonly _dashStyle: Classes = NeonDashStyle.use();

    public render(): JSX.Element {

        return (
            <NeonBox {...boxProps(this.props, this._getSizeClass())}>

                <button
                    disabled={this.props.disabled}
                    className={this.props.buttonClassName}
                    tabIndex={this.props.tabIndex}
                    onClick={() => this.props.onClick && this.props.onClick()}>
                    {this.props.children}
                </button>
            </NeonBox>);
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.MEDIUM: return this._dashStyle.medium;
            case SIZE.LARGE: return this._dashStyle.large;
            case SIZE.FULL: return this._dashStyle.full;
            case SIZE.RELATIVE: return this._dashStyle.relative;
            case SIZE.NORMAL:
            default: return this._dashStyle.normal;
        }
    }
}

export const NeonDash: ThemedComponent<NeonDashProps> = withConsumer<NeonDashProps>(NeonDashBase);
