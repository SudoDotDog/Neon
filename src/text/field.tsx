/**
 * @author WMXPY
 * @namespace Neon_Text
 * @description Field
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { SIZE } from "../declare";
import { NeonTextFieldStyle } from "./style/field";

export type NeonTextFieldProps = {

    readonly autofocus?: boolean;
    readonly label?: string;
    readonly value?: string;

    readonly onBlur?: () => void;
    readonly onChange?: (value: string) => void;
    readonly onEnter?: () => void;

    readonly size?: SIZE;
    readonly tabIndex?: number;
} & ThemeProps & BoxProps;

export type NeonTextFieldStates = {

    readonly shrink: boolean;
};

export class NeonTextFieldBase extends React.Component<NeonTextFieldProps, NeonTextFieldStates> {

    public readonly state: NeonTextFieldStates = {

        shrink: false,
    };

    private _ref: HTMLTextAreaElement | null;
    private _textFieldStyle: Classes = NeonTextFieldStyle.use();

    public constructor(props: NeonTextFieldProps) {

        super(props);

        this._ref = null;

        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._handleBlur = this._handleBlur.bind(this);
        this._handleFocus = this._handleFocus.bind(this);
    }

    public componentDidMount() {

        if (this.props.autofocus && this._ref) {
            this._ref.focus();
        }
    }

    public render() {

        return (<NeonBox {...boxProps(
            this.props,
            this._textFieldStyle.wrap,
            this._getSizeClass(),
        )} >
            <div
                className={this._getShrinkClass()}
                onClick={() => this._ref && this._ref.focus()}
            >
                {this.props.label}
            </div>
            <textarea
                ref={(ref) => this._ref = ref}
                className={this._textFieldStyle.area}
                tabIndex={this.props.tabIndex}
                value={this.props.value}
                onBlur={this._handleBlur}
                onFocus={this._handleFocus}
                onKeyPress={this._handleKeyPress}
                onChange={(event) => this.props.onChange && this.props.onChange(event.target.value)}
            />
        </NeonBox>);
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.NORMAL: return this._textFieldStyle.normal;
            case SIZE.LARGE: return this._textFieldStyle.large;
            case SIZE.FULL: return this._textFieldStyle.full;
            case SIZE.RELATIVE: return this._textFieldStyle.relative;
            case SIZE.MEDIUM:
            default: return this._textFieldStyle.medium;
        }
    }

    private _handleKeyPress(event: React.KeyboardEvent): void {

        if (event.key === 'Enter') {
            if (this.props.onEnter) {
                this.props.onEnter();
            }
        }
    }

    private _handleBlur(): void {

        if (this.props.onBlur) {
            this.props.onBlur();
        }

        this.setState({
            shrink: false,
        });
    }

    private _handleFocus(): void {

        this.setState({
            shrink: true,
        });
    }

    private _getShrinkClass(): string | undefined {

        if (this.state.shrink || this.props.value) {
            return mergeClasses(this._textFieldStyle.label, this._textFieldStyle.shrink);
        }
        return this._textFieldStyle.label;
    }
}

export const NeonTextField: ThemedComponent<NeonTextFieldProps> = withConsumer<NeonTextFieldProps>(NeonTextFieldBase);