/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Button
 */

import * as React from "react";
import { NeonBox } from "../.common/box/box";
import { combineStyle } from "../.common/style";
import { MARGIN, SIZE, WIDTH } from "../declare";
import { NeonTheme, NeonThemeConsumer } from "../theme";
import { getNeonButtonStyle, NeonButtonStyle } from "./style";

export type NeonButtonProps = {

    readonly onClick: () => void;

    readonly width?: WIDTH;
    readonly size?: SIZE;
    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
};

export class NeonButton extends React.Component<NeonButtonProps, {}> {

    public static readonly defaultProps: Partial<NeonButtonProps> = {

        width: WIDTH.NORMAL,
    };

    public render(): JSX.Element {

        return React.createElement(NeonThemeConsumer, {} as any, (theme: NeonTheme) => {

            return (
                <NeonBox
                    margin={this.props.margin}>
                    <button
                        style={combineStyle(getNeonButtonStyle(theme), this.props.style)}
                        className={this._getClass()}
                        onClick={this.props.onClick}>
                        {this.props.children}
                    </button>
                </NeonBox>);
        });
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
