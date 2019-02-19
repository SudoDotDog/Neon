/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Shine
 */

import * as React from "react";
import { assertIfTrue, mergeClasses } from "../#common/style";
import { SIZE } from "../declare/index";
import { NeonShineStyle } from "./style";

export type NeonShineProps = {

    readonly onClick?: () => void;

    readonly disabled?: boolean;
    readonly tabIndex?: number;
    readonly size?: SIZE;

    readonly buttonClassName?: string;

    readonly children?: any;
};

export class NeonShineBase extends React.Component<NeonShineProps> {

    public render(): JSX.Element {

        return (<button
            disabled={this.props.disabled}
            className={mergeClasses(
                this._getSizeClass(),
                NeonShineStyle.button,
                assertIfTrue(this.props.disabled, NeonShineStyle.disabled),
            )}
            tabIndex={this.props.tabIndex}
            onClick={() => this.props.onClick && this.props.onClick()}>
            {this.props.children}
        </button>);
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.MEDIUM: return NeonShineStyle.medium;
            case SIZE.LARGE: return NeonShineStyle.large;

            case SIZE.FULL:
            case SIZE.RELATIVE: return NeonShineStyle.full;

            case SIZE.NORMAL:
            default: return NeonShineStyle.normal;
        }
    }
}

export const NeonShine: React.ComponentType<NeonShineProps> = NeonShineBase;
