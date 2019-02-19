/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Button
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { SIZE, WIDTH } from "../declare";
import { getNeonButtonStyle, NeonButtonStyle } from "./style";

export type NeonButtonProps = {

    readonly onClick?: () => void;

    readonly disabled?: boolean;
    readonly tabIndex?: number;
    readonly width?: WIDTH;
    readonly size?: SIZE;

    readonly buttonClassName?: string;

    readonly children?: any;
} & ThemeProps & BoxProps;

export class NeonButtonBase extends React.Component<NeonButtonProps, {}> {

    public static readonly defaultProps: Partial<NeonButtonProps> = {

        width: WIDTH.NORMAL,
    };

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

    private _getClass(): string | undefined {

        const classes: string[] = [];

        switch (this.props.width) {

            case WIDTH.FULL: {
                classes.push(
                    this._getSizeClass(),
                    NeonButtonStyle.button,
                    NeonButtonStyle.full,
                );
                break;
            }
            case WIDTH.NORMAL:
            default: {
                classes.push(
                    this._getSizeClass(),
                    NeonButtonStyle.button,
                );
            }
        }

        if (this.props.disabled) {

            classes.push(NeonButtonStyle.disabled);
        }

        return mergeClasses(
            ...classes,
            this.props.buttonClassName,
        );
    }
}

export const NeonButton: ThemedComponent<NeonButtonProps> = withConsumer<NeonButtonProps>(NeonButtonBase);
