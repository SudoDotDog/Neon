/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Button
 */

import * as React from "react";
import { NeonBox } from "../box/box";
import { MARGIN, SIZE } from "../declare";
import { NeonButtonStyle } from "./style";

export type NeonButtonProps = {

    readonly onClick: () => void;

    readonly size?: SIZE;
    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
};

export class NeonButton extends React.Component<NeonButtonProps, {}> {

    public static readonly defaultProps: Partial<NeonButtonProps> = {

        size: SIZE.NORMAL,
    };

    public render(): JSX.Element {

        return (
            <NeonBox
                style={this.props.style}
                margin={this.props.margin}>
                <button
                    className={this._getClass()}
                    onClick={this.props.onClick}>
                    {this.props.children}
                </button>
            </NeonBox>);
    }

    private _getClass(): string {

        switch (this.props.size) {

            case SIZE.FULL:
                return [
                    NeonButtonStyle.button,
                    NeonButtonStyle.full,
                ].join(' ');
            case SIZE.NORMAL:
            default:
                return [
                    NeonButtonStyle.button,
                ].join(' ');
        }
    }
}
