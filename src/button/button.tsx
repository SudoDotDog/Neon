/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Button
 */

import * as React from "react";
import { NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { MARGIN, SIZE, WIDTH } from "../declare";
import { getNeonButtonStyle, NeonButtonStyle } from "./style";

export type NeonButtonProps = {

    readonly onClick?: () => void;

    readonly tabIndex?: number;
    readonly className?: string;
    readonly width?: WIDTH;
    readonly size?: SIZE;
    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
} & ThemeProps;

export class NeonButtonBase extends React.Component<NeonButtonProps, {}> {

    public static readonly defaultProps: Partial<NeonButtonProps> = {

        width: WIDTH.NORMAL,
    };

    public render(): JSX.Element {

        return (
            <NeonBox
                style={this.props.style}
                className={[this._getBoxSizeClass()].concat(this.props.className || []).join(' ')}
                margin={this.props.margin}>
                <button
                    style={getNeonButtonStyle(this.props.theme)}
                    className={this._getClass()}
                    tabIndex={this.props.tabIndex}
                    onClick={() => this.props.onClick && this.props.onClick()}>
                    {this.props.children}
                </button>
            </NeonBox>);
    }

    private _getBoxSizeClass(): string | undefined {

        if (this.props.size === SIZE.RELATIVE
            || this.props.size === SIZE.FULL) {

            return NeonButtonStyle.sizeFullBox;
        }

        return undefined;
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.FULL:
            case SIZE.LARGE: return NeonButtonStyle.sizeLarge;
            case SIZE.MEDIUM: return NeonButtonStyle.sizeMedium;
            case SIZE.FULL:
            case SIZE.RELATIVE: return NeonButtonStyle.sizeFull;
            case SIZE.NORMAL:
            default: return NeonButtonStyle.sizeNormal;
        }
    }

    private _getClass(): string {

        switch (this.props.width) {

            case WIDTH.FULL:
                return [
                    this._getSizeClass(),
                    NeonButtonStyle.button,
                    NeonButtonStyle.full,
                ].join(' ');
            case WIDTH.NORMAL:
            default:
                return [
                    this._getSizeClass(),
                    NeonButtonStyle.button,
                ].join(' ');
        }
    }
}

export const NeonButton: ThemedComponent<NeonButtonProps> = withConsumer<NeonButtonProps>(NeonButtonBase);
