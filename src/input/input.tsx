/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Input
 */

import * as React from "react";
import injectSheet from "react-jss";
import { JSSStyle } from "../common/style";

export type NeonInputProps = {
    label: string;
    value: string;
    type?: string;
    onChange: (value: string) => void;
};

const styles: JSSStyle = {

    myColor: {
        color: 'green',
    },
};

export class NeonInputBase extends React.Component<NeonInputProps, {}> {

    public static defaultProps: Partial<NeonInputProps> = {
        type: "text",
    };

    public render() {

        // const classes = getClasses(this.props);

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

export const NeonInput: React.SFC<NeonInputProps> = injectSheet(styles)(NeonInputBase);

