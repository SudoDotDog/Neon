/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Editable
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, withConsumer } from "../#common/consumer";
import { mergeClasses } from "../#common/style";
import { NeonInputProps } from "./input";
import { NeonInputStyle } from "./style";

export type NeonEditableProps = {

    readonly origin?: any;
} & NeonInputProps;

export type NeonEditableStates = {

    readonly editing: boolean;
};

export class NeonInputBase extends React.Component<NeonEditableProps, NeonEditableStates> {

    public readonly state: NeonEditableStates = {

        editing: false,
    };

    public render() {

        if (this.state.editing) {

            return (<NeonInput {...this.props} />);
        } else {

            return (<NeonBox {...boxProps(this.props, NeonInputStyle.wrap)} >
                <div
                    className={mergeClasses(NeonInputStyle.label, NeonInputStyle.shrink)}
                    onClick={() => void 0}>
                    {this.props.label}
                </div>
                <div
                    className={NeonInputStyle.input}
                    tabIndex={this.props.tabIndex}>
                    {}
                </div>
            </NeonBox>);
        }
    }
}

export const NeonInput: ThemedComponent<NeonEditableProps> = withConsumer<NeonEditableProps>(NeonInputBase);
