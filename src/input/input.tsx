/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Input
 */

import jss, { StyleSheet } from "jss";
import * as React from "react";
import { NeonInputStyle } from "./style";

export type NeonInputProps = {
    label: string;
    value: string;
    type?: string;
    onChange: (value: string) => void;
};

const { classes }: StyleSheet = jss.createStyleSheet(NeonInputStyle).attach();

export class NeonInput extends React.Component<NeonInputProps, {}> {

    public static defaultProps: Partial<NeonInputProps> = {
        type: "text",
    };

    public render() {

        return (
            <div className={classes.wrap}>
                <div className={classes.label}>
                    {this.props.label}
                </div>
                <input
                    className={classes.input}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={(event) => this.props.onChange(event.target.value)}
                />
            </div>
        );
    }
}
