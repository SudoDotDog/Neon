/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Button
 */

import * as React from "react";
import { SIZE } from "../common/declare";
import { NeonButtonStyle } from "./style";

export type NeonButtonProps = {

    onClick: () => void;

    size?: SIZE;

    style?: React.CSSProperties;
    children?: JSX.Element | any;
};

export class NeonButton extends React.Component<NeonButtonProps, {}> {

    public static readonly defaultProps: Partial<NeonButtonProps> = {

        size: SIZE.NORMAL,
    };

    public render(): JSX.Element {

        return (
            <div style={this.props.style}>
                <button
                    className={this._getClass()}
                    onClick={this.props.onClick}>
                    {this.props.children}
                </button>
            </div>);
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
