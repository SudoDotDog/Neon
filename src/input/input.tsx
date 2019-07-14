/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Input
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { INPUT_TYPE } from "./declare";
import { NeonInputStyle } from "./style/input";

export type NeonInputProps = {

    readonly autoFocus?: boolean;
    readonly autoCapitalize?: boolean;
    readonly autoComplete?: boolean;
    readonly autoCorrect?: boolean;
    readonly autoSave?: boolean;
    readonly label?: string;
    readonly value?: string;

    readonly onBlur?: () => void;
    readonly onChange?: (value: string) => void;
    readonly onEnter?: () => void;

    readonly tabIndex?: number;
    readonly type?: INPUT_TYPE;
} & ThemeProps & BoxProps;

export type NeonInputStates = {

    readonly shrink: boolean;
};

export class NeonInputBase extends React.Component<NeonInputProps, NeonInputStates> {

    public static readonly defaultProps: Partial<NeonInputProps> = {

        type: INPUT_TYPE.TEXT,
    };

    public readonly state: NeonInputStates = {

        shrink: false,
    };

    private _ref: HTMLInputElement | null;

    private readonly _inputStyle: Classes = NeonInputStyle.use();

    public constructor(props: NeonInputProps) {

        super(props);

        this._ref = null;

        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._handleBlur = this._handleBlur.bind(this);
        this._handleFocus = this._handleFocus.bind(this);
    }

    public render() {

        return (<NeonBox {...boxProps(this.props, this._inputStyle.wrap)} >
            <div
                className={this._getShrinkClass()}
                onClick={() => this._ref && this._ref.focus()}>
                {this.props.label}
            </div>
            <input
                autoFocus={this.props.autoFocus}
                autoCapitalize={this.props.autoCapitalize ? 'on' : undefined}
                autoComplete={this.props.autoComplete ? 'on' : undefined}
                autoCorrect={this.props.autoCorrect ? 'on' : undefined}
                autoSave={this.props.autoSave ? 'on' : undefined}
                ref={(ref) => this._ref = ref}
                className={this._inputStyle.input}
                type={this.props.type}
                value={this.props.value}
                tabIndex={this.props.tabIndex}
                onFocus={this._handleFocus}
                onBlur={this._handleBlur}
                onChange={(event) => this.props.onChange && this.props.onChange(event.target.value)}
                onKeyPress={this._handleKeyPress}
            />
        </NeonBox>);
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
            return mergeClasses(this._inputStyle.label, this._inputStyle.shrink);
        }
        return this._inputStyle.label;
    }
}

export const NeonInput: ThemedComponent<NeonInputProps> = withConsumer<NeonInputProps>(NeonInputBase);
