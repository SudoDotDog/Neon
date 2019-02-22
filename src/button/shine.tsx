/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Shine
 */

import { Classes } from "jss";
import * as React from "react";
import { assertIfFalse, assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { SIZE } from "../declare/index";
import { NeonShineStyle } from "./style/shine";

export type NeonShineProps = {

    readonly onClick?: () => void;

    readonly disabled?: boolean;
    readonly tabIndex?: number;
    readonly size?: SIZE;

    readonly buttonClassName?: string;

    readonly children?: any;
};

export class NeonShineBase extends React.Component<NeonShineProps> {

    private readonly _shineStyle: Classes = NeonShineStyle.use();

    public render(): JSX.Element {

        return (<button
            disabled={this.props.disabled}
            className={mergeClasses(
                this._getSizeClass(),
                this._shineStyle.button,
                assertIfFalse(this.props.disabled, this._shineStyle.hoverable),
                assertIfTrue(this.props.disabled, this._shineStyle.disabled),
                this.props.buttonClassName,
            )}
            tabIndex={this.props.tabIndex}
            onClick={() => this.props.onClick && this.props.onClick()}>
            {this.props.children}
        </button>);
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.MEDIUM: return this._shineStyle.medium;
            case SIZE.LARGE: return this._shineStyle.large;

            case SIZE.FULL:
            case SIZE.RELATIVE: return this._shineStyle.full;

            case SIZE.NORMAL:
            default: return this._shineStyle.normal;
        }
    }
}

export const NeonShine: React.ComponentType<NeonShineProps> = NeonShineBase;
