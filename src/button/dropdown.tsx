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
import { fixTabIndex } from "../#common/util";
import { SIZE } from "../declare/index";
import { NeonMenuItemElement } from "../menu/declare";
import { NeonMenuItem } from "../menu/item";
import { NeonMenu } from "../menu/menu";
import { NeonButtonStyle } from "./style/button";
import { NeonDropdownButtonStyle } from "./style/dropdown";

export type NeonDropdownButtonProps = {

    readonly onClick?: () => void;
    readonly list?: NeonMenuItemElement[];

    readonly disabled?: boolean;
    readonly tabIndex?: number;
    readonly size?: SIZE;

    readonly dropdownSize?: SIZE;
    readonly icon?: React.ReactNode;
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
    private readonly _dropdownButtonStyle: Classes = NeonDropdownButtonStyle.use();

    public constructor(props: NeonDropdownButtonProps) {

        super(props);

        this._handleMouseEnter = this._handleMouseEnter.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    public render(): JSX.Element {

        return (
            <NeonBox
                divAttributes={{
                    // eslint-disable-next-line @typescript-eslint/unbound-method
                    onMouseEnter: this._handleMouseEnter,
                    // eslint-disable-next-line @typescript-eslint/unbound-method
                    onMouseLeave: this._handleMouseLeave,
                }}
                {...boxProps(
                    this.props,
                    this._dropdownButtonStyle.wrap,
                    this._dropdownButtonStyle.box,
                    this._buttonStyle.sizeFullBox,
                )}>
                <button
                    disabled={this.props.disabled}
                    style={{
                        backgroundColor: this.props.theme.main.color,
                        color: this.props.theme.main.text,
                    }}
                    className={this._getClass()}
                    tabIndex={fixTabIndex(this.props.tabIndex)}

                    onClick={() => this.props.onClick && this.props.onClick()}>
                    {this.props.children}{this.props.icon && this.props.icon}
                </button>
                {this._renderDropdown()}
            </NeonBox>);
    }

    private _handleMouseEnter() {
        this.setState({ hover: true });
    }

    private _handleMouseLeave() {
        this.setState({ hover: false });
    }

    private _renderDropdown(): React.ReactNode {

        if (!this.state.hover) {
            return null;
        }

        if (!this.props.list) {
            return null;
        }

        return (<NeonMenu
            className={this._dropdownButtonStyle.dropdown}
            size={this.props.dropdownSize}
        >
            {this.props.list.map((element: NeonMenuItemElement, index: number) =>
                (<NeonMenuItem
                    key={element.key || index}
                    onClick={this._createElementClickFunction(element.onClick)}>
                    {element.children}
                </NeonMenuItem>),
            )}
        </NeonMenu>);
    }

    private _createElementClickFunction(onClick?: () => void) {

        return () => {

            this._handleMouseLeave();
            if (onClick) {
                onClick();
            }
        };
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.MEDIUM: return this._dropdownButtonStyle.sizeMedium;
            case SIZE.LARGE: return this._dropdownButtonStyle.sizeLarge;

            case SIZE.FULL:
            case SIZE.RELATIVE: return this._dropdownButtonStyle.sizeFull;

            case SIZE.NORMAL:
            default: return this._dropdownButtonStyle.sizeNormal;
        }
    }

    private _getClass(): string | undefined {

        const classes: string[] = [
            this._getSizeClass(),
            this._buttonStyle.button,
            this._buttonStyle.full,
        ];

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
