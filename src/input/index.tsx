/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Index
 */

import * as React from "react";

export type NeonInputProps = {
    value: string;
    type?: string;
    onChange: (value: string) => void;
};

export class NeonInput extends React.Component<NeonInputProps, {}> {

    public static defaultProps: Partial<NeonInputProps> = {
        type: "text",
    };

    public render() {
        return (<input
            type={this.props.type}
            value={this.props.value}
            onChange={(event) => this.props.onChange(event.target.value)}
        />);
    }
}

