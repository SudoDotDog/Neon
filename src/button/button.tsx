/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Button
 */

import * as React from "react";
import { NeonBox } from "../#common/components/box";
import { withConsumer } from "../#common/consumer";
import { combineStyle } from "../#common/style";
import { MARGIN, SIZE, WIDTH } from "../declare";
import { NeonTheme } from "../theme";
import { getNeonButtonStyle, NeonButtonStyle } from "./style";

export type NeonButtonProps = {

    readonly theme: NeonTheme;

    readonly onClick?: () => void;

    readonly width?: WIDTH;
    readonly size?: SIZE;
    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
};

export class NeonButtonBase extends React.Component<NeonButtonProps, {}> {

    public static readonly defaultProps: Partial<NeonButtonProps> = {

        width: WIDTH.NORMAL,
    };

    public render(): JSX.Element {

        return (
            <NeonBox
                margin={this.props.margin}>
                <button
                    style={combineStyle(getNeonButtonStyle(this.props.theme), this.props.style)}
                    className={this._getClass()}
                    onClick={this.props.onClick}>
                    {this.props.children}
                </button>
            </NeonBox>);
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.FULL: return NeonButtonStyle.sizeFull;
            case SIZE.MEDIUM: return NeonButtonStyle.sizeMedium;
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

export const NeonButton: React.ComponentType<Pick<NeonButtonProps, Exclude<keyof NeonButtonProps, 'theme'>>> = withConsumer(NeonButtonBase);
