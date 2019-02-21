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
import { SIZE } from "../declare/index";
import { NeonShine } from "./shine";
import { getNeonButtonStyle, NeonButtonStyle, NeonDropdownButtonStyle } from "./style";

export type NeonDropdownButtonListElement = {

    readonly text: string;
    readonly key?: string;
    readonly onClick?: () => void;
};

export type NeonDropdownButtonProps = {

    readonly onClick?: () => void;
    readonly list?: NeonDropdownButtonListElement[];

    readonly disabled?: boolean;
    readonly tabIndex?: number;
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
                    onMouseEnter: this._handleMouseEnter,
                    onMouseLeave: this._handleMouseLeave,
                }}
                {...boxProps(this.props,
                    this._dropdownButtonStyle.wrap,
                    this._dropdownButtonStyle.box,
                    this._buttonStyle.sizeFullBox,
                )}>
                <button
                    disabled={this.props.disabled}
                    style={getNeonButtonStyle(this.props.theme)}
                    className={this._getClass()}
                    tabIndex={this.props.tabIndex}

                    onClick={() => this.props.onClick && this.props.onClick()}>
                    {this.props.children}&nbsp;▼
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

        return (<div className={this._dropdownButtonStyle.dropdown}>
            {this.props.list.map((element: NeonDropdownButtonListElement, index: number) =>
                (<NeonShine
                    key={element.key || index}
                    onClick={element.onClick}>
                    {element.text}
                </NeonShine>),
            )}
        </div>);
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
