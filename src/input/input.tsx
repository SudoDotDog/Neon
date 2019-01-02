/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Input
 */

import jss, { StyleSheet } from "jss";
import * as React from "react";
import { NeonInputStyle } from "./style";

export type NeonInputProps = {
    readonly label: string;
    readonly value: string;
    readonly onChange: (value: string) => void;

    readonly style?: React.CSSProperties;
    readonly type?: string;
};

export type NeonInputStates = {

    readonly shrink: boolean;
};

const { classes }: StyleSheet = jss.createStyleSheet(NeonInputStyle).attach();

export class NeonInput extends React.Component<NeonInputProps, NeonInputStates> {

    public static readonly defaultProps: Partial<NeonInputProps> = {
        type: "text",
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
            <div
                style={this.props.style}
                className={classes.wrap}>
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
                    className={classes.input}
                    type={this.props.type}
                    value={this.props.value}
                    onFocus={this._handleFocus}
                    onBlur={this._handleBlur}
                    onChange={(event) => this.props.onChange(event.target.value)}
                />
            </div>
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

            return `${classes.label} ${classes.shrink}`;
        }

        return classes.label;
    }
}
