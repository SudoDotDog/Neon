/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Peek
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { SIZE, WIDTH } from "../declare";
import { getNeonButtonStyle, NeonButtonStyle } from "./style";

export type NeonPeekProps = {

    readonly onClick?: () => void;

    readonly disabled?: boolean;
    readonly tabIndex?: number;
    readonly className?: string;
    readonly size?: SIZE;

    readonly children?: any;
} & ThemeProps & BoxProps;

export class NeonButtonBase extends React.Component<NeonPeekProps, {}> {

    public render(): JSX.Element {

        return (
            <NeonBox {...boxProps(this.props, this._getBoxSizeClass())}>

                <button
                    disabled={this.props.disabled}
                    style={getNeonButtonStyle(this.props.theme)}
                    className={this._getClass()}
                    tabIndex={this.props.tabIndex}
                    onClick={() => this.props.onClick && this.props.onClick()}>
                    {this.props.children}
                </button>
            </NeonBox>);
    }

    private _getBoxSizeClass(): string | undefined {

        if (this.props.size === SIZE.FULL) {

            return NeonButtonStyle.sizeFullBox;
        }

        return undefined;
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.MEDIUM: return NeonButtonStyle.sizeMedium;
            case SIZE.LARGE: return NeonButtonStyle.sizeLarge;

            case SIZE.FULL:
            case SIZE.RELATIVE: return NeonButtonStyle.sizeFull;

            case SIZE.NORMAL:
            default: return NeonButtonStyle.sizeNormal;
        }
    }

    private _getClass(): string {

        const classes: string[] = [];
        if (this.props.disabled) {

            classes.push(NeonButtonStyle.disabled);
        }

        return classes.join(' ');
    }
}

export const NeonButton: ThemedComponent<NeonPeekProps> = withConsumer<NeonPeekProps>(NeonButtonBase);
