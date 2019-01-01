/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Input
 */

import * as React from "react";

export type NeonInputProps = {
    label: string;
    value: string;
    type?: string;
    onChange: (value: string) => void;
};

export class NeonInput extends React.Component<NeonInputProps, {}> {

    public static defaultProps: Partial<NeonInputProps> = {
        type: "text",
    };

    public render() {

        return (
            <div>
                {this.props.label}
                <input
                    type={this.props.type}
                    value={this.props.value}
                    onChange={(event) => this.props.onChange(event.target.value)}
                />
            </div>
        );
    }
}
