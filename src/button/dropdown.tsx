/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Dropdown Button
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { SIZE, WIDTH } from "../declare/index";
import { getNeonButtonStyle, NeonButtonStyle } from "./style";

export type NeonDropdownButtonProps = {

    readonly onClick?: () => void;

    readonly disabled?: boolean;
    readonly tabIndex?: number;
    readonly width?: WIDTH;
    readonly size?: SIZE;

    readonly buttonClassName?: string;

    readonly children?: any;
} & ThemeProps & BoxProps;

export type NeonDropdownButtonStates = {

    readonly hover?: boolean;
};

export class NeonDropdownButtonBase extends React.Component<NeonDropdownButtonProps, NeonDropdownButtonStates> {

    public readonly state: NeonDropdownButtonStates = {

        hover: false,
    };

    private readonly _buttonStyle: Classes = NeonButtonStyle.use();

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

            return this._buttonStyle.sizeFullBox;
        }

        return undefined;
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.MEDIUM: return this._buttonStyle.sizeMedium;
            case SIZE.LARGE: return this._buttonStyle.sizeLarge;

            case SIZE.FULL:
            case SIZE.RELATIVE: return this._buttonStyle.sizeFull;

            case SIZE.NORMAL:
            default: return this._buttonStyle.sizeNormal;
        }
    }

    private _getClass(): string | undefined {

        const classes: string[] = [];

        switch (this.props.width) {

            case WIDTH.FULL: {
                classes.push(
                    this._getSizeClass(),
                    this._buttonStyle.button,
                    this._buttonStyle.full,
                );
                break;
            }
            case WIDTH.NORMAL:
            default: {
                classes.push(
                    this._getSizeClass(),
                    this._buttonStyle.button,
                );
            }
        }

        if (this.props.disabled) {

            classes.push(this._buttonStyle.disabled);
        }

        return mergeClasses(
            ...classes,
            this.props.buttonClassName,
        );
    }
}

export const NeonDropdownButton: ThemedComponent<NeonDropdownButtonProps> = withConsumer<NeonDropdownButtonProps>(NeonDropdownButtonBase);
