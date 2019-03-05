/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Coin
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { fixTabIndex } from "../#common/util";
import { SIZE } from "../declare";
import { getNeonButtonStyle, NeonButtonStyle } from "./style/button";
import { NeonCoinStyle } from "./style/coin";

export type NeonCoinCut = {

    readonly onClick?: () => void;

    readonly circle?: boolean;
    readonly round?: boolean;
    readonly size?: SIZE;

    readonly disabled?: boolean;
    readonly tabIndex?: number;

    readonly buttonClassName?: string;

    readonly children?: any;
};

export type NeonCoinProps = {

    readonly buttonAttributes?: React.HTMLAttributes<HTMLButtonElement>;
} & NeonCoinCut & ThemeProps & BoxProps;

export class NeonCoinBase extends React.Component<NeonCoinProps> {

    private readonly _buttonStyle: Classes = NeonButtonStyle.use();
    private readonly _coinStyle: Classes = NeonCoinStyle.use();

    public render(): JSX.Element {

        return (<NeonBox
            {...boxProps(this.props)}
        >
            <button
                disabled={this.props.disabled}
                style={getNeonButtonStyle(this.props.theme)}
                className={mergeClasses(
                    this._buttonStyle.button,
                    this.props.buttonClassName,
                    this._getSizeClass(),
                    this._getShapeClass(),
                    assertIfTrue(this.props.disabled, this._buttonStyle.disabled),
                )}
                tabIndex={fixTabIndex(this.props.tabIndex)}
                onClick={() => this.props.onClick && this.props.onClick()}
                {...this.props.buttonAttributes}
            >
                {this.props.children}
            </button>
        </NeonBox>);
    }

    private _getShapeClass(): string | undefined {

        if (this.props.circle) {
            return 'circle';
        }
        if (this.props.round) {
            return 'round';
        }
        return undefined;
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.MEDIUM: return this._coinStyle.sizeMedium;
            case SIZE.LARGE: return this._coinStyle.sizeLarge;
            case SIZE.FULL: return this._coinStyle.sizeFull;

            case SIZE.RELATIVE:
            case SIZE.NORMAL:
            default: return this._coinStyle.sizeNormal;
        }
    }
}

export const NeonCoin: ThemedComponent<NeonCoinProps> = withConsumer<NeonCoinProps>(NeonCoinBase);
