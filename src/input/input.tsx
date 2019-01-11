/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Input
 */

import * as React from "react";
import { NeonBox } from "../box";
import { MARGIN } from "../declare";
import { INPUT_TYPE } from "./declare";
import { NeonInputStyle } from "./style";

export type NeonInputProps = {
    readonly label: string;
    readonly value: string;
    readonly onChange: (value: string) => void;

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly type?: INPUT_TYPE;
};

export type NeonInputStates = {

    readonly shrink: boolean;
};

export class NeonInput extends React.Component<NeonInputProps, NeonInputStates> {

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

        this._handleBlur = this._handleBlur.bind(this);
        this._handleFocus = this._handleFocus.bind(this);
    }

    public render() {

        return (
            <NeonBox
                style={this.props.style}
                className={NeonInputStyle.wrap}
                margin={this.props.margin}>
                <div
                    className={this._getShrinkClass()}
                    onClick={() => {
                        if (this._ref) {
                            this._ref.focus();
                        }
                    }}>
                    {this.props.label}
                </div>
                <input
                    ref={(ref) => this._ref = ref}
                    className={NeonInputStyle.input}
                    type={this.props.type}
                    value={this.props.value}
                    onFocus={this._handleFocus}
                    onBlur={this._handleBlur}
                    onChange={(event) => this.props.onChange(event.target.value)}
                />
            </NeonBox>
        );
    }

    private _handleBlur(): void {

        this.setState({
            shrink: false,
        });
    }

    private _handleFocus(): void {

        this.setState({
            shrink: true,
        });
    }

    private _getShrinkClass(): string {

        if (this.state.shrink || this.props.value) {

            return `${NeonInputStyle.label} ${NeonInputStyle.shrink}`;
        }

        return NeonInputStyle.label;
    }
}
