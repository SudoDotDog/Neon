/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Text
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { INPUT_TYPE } from "./declare";
import { NeonInputStyle } from "./style";

export type NeonTextProps = {

    readonly autofocus?: boolean;
    readonly value?: string;

    readonly onBlur?: () => void;
    readonly onChange?: (value: string) => void;
    readonly onEnter?: () => void;

    readonly tabIndex?: number;
    readonly type?: INPUT_TYPE;
} & ThemeProps & BoxProps;

export class NeonTextBase extends React.Component<NeonTextProps> {

    public static readonly defaultProps: Partial<NeonTextProps> = {

        type: INPUT_TYPE.TEXT,
    };

    private _ref: HTMLInputElement | null;

    public constructor(props: NeonTextProps) {

        super(props);

        this._ref = null;

        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    public componentDidMount() {

        if (this.props.autofocus && this._ref) {
            this._ref.focus();
        }
    }

    public render() {

        return (<NeonBox {...boxProps(this.props, NeonInputStyle.text)} >
            <input
                ref={(ref) => this._ref = ref}
                className={NeonInputStyle.textInput}
                type={this.props.type}
                value={this.props.value}
                tabIndex={this.props.tabIndex}
                onBlur={this.props.onBlur}
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
}

export const NeonText: ThemedComponent<NeonTextProps> = withConsumer<NeonTextProps>(NeonTextBase);
