/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Peek
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTrue, mergeClasses } from "../#common/style";
import { SIZE } from "../declare";
import { getNeonButtonStyle, NeonButtonStyle, NeonPeekStyle } from "./style";

export type NeonPeekProps = {

    readonly onClick?: () => void;

    readonly circle?: boolean;
    readonly disabled?: boolean;
    readonly tabIndex?: number;
    readonly size?: SIZE;

    readonly children?: any;
    readonly expend?: string;
} & ThemeProps & BoxProps;

export type NeonPeekStates = {

    readonly hovering: boolean;
};

export class NeonPeekBase extends React.Component<NeonPeekProps, NeonPeekStates> {

    public readonly state: NeonPeekStates = {

        hovering: false,
    };

    public render(): JSX.Element {

        return (<NeonBox {...boxProps(this.props)}>

            <button
                disabled={this.props.disabled}
                style={getNeonButtonStyle(this.props.theme)}
                className={mergeClasses(
                    NeonButtonStyle.button,
                    this._getSizeClass(),
                    assertIfTrue(this.state.hovering, NeonPeekStyle.hovering),
                    assertIfTrue(this.props.circle, NeonPeekStyle.circle),
                    assertIfTrue(this.props.disabled, NeonButtonStyle.disabled),
                )}
                tabIndex={this.props.tabIndex}
                onClick={() => this.props.onClick && this.props.onClick()}>
                {this.state.hovering ? this.props.expend : this.props.children}
            </button>
        </NeonBox>);
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.MEDIUM: return NeonPeekStyle.sizeMedium;
            case SIZE.LARGE: return NeonPeekStyle.sizeLarge;
            case SIZE.FULL: return NeonPeekStyle.sizeFull;

            case SIZE.RELATIVE:
            case SIZE.NORMAL:
            default: return NeonPeekStyle.sizeNormal;
        }
    }
}

export const NeonPeek: ThemedComponent<NeonPeekProps> = withConsumer<NeonPeekProps>(NeonPeekBase);
