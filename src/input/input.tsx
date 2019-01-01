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
    readonly type?: string;
    readonly onChange: (value: string) => void;
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

    public constructor(props: NeonInputProps) {

        super(props);

        this._handleFocus = this._handleFocus.bind(this);
    }

    public render() {

        return (
            <div className={classes.wrap}>
                <div className={this._getShrinkClass()}>
                    {this.props.label}
                </div>
                <input
                    className={classes.input}
                    type={this.props.type}
                    value={this.props.value}
                    onFocus={this._handleFocus}
                    onChange={(event) => this.props.onChange(event.target.value)}
                />
            </div>
        );
    }

    private _handleFocus(): void {

        this.setState({
            shrink: true,
        });
    }

    private _getShrinkClass(): string {

        if (this.state.shrink) {

            return `${classes.label} ${classes.shrink}`;
        }

        return classes.label;
    }
}
