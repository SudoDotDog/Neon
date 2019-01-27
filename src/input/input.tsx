/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Input
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style";
import { INPUT_TYPE } from "./declare";
import { NeonInputStyle } from "./style";

export type NeonInputProps = {

    readonly autofocus?: boolean;
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

    public constructor(props: NeonInputProps) {

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

        return (<NeonBox {...boxProps(this.props, NeonInputStyle.wrap)} >
            <div
                className={this._getShrinkClass()}
                onClick={() => this._ref && this._ref.focus()}>
                {this.props.label}
            </div>
            <input
                ref={(ref) => this._ref = ref}
                className={NeonInputStyle.input}
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
            return mergeClasses(NeonInputStyle.label, NeonInputStyle.shrink);
        }
        return NeonInputStyle.label;
    }
}

export const NeonInput: ThemedComponent<NeonInputProps> = withConsumer<NeonInputProps>(NeonInputBase);
