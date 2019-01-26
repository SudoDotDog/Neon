/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Editable
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, withConsumer } from "../#common/consumer";
import { mergeClasses } from "../#common/style";
import { NeonInputStyle } from "./style";
import { NeonText, NeonTextProps } from "./text";

export type NeonEditableTextProps = {

    readonly disabled?: boolean;
    readonly origin?: any;
} & NeonTextProps;

export type NeonEditableTextStates = {

    readonly editing: boolean;
};

export class NeonEditableTextBase extends React.Component<NeonEditableTextProps, NeonEditableTextStates> {

    public readonly state: NeonEditableTextStates = {

        editing: false,
    };

    public constructor(props: NeonEditableTextProps) {

        super(props);

        this._handleClickShowing = this._handleClickShowing.bind(this);
    }

    public render() {

        if (this.state.editing) {

            return (<NeonText {...this.props} autofocus />);
        } else {

            return (<NeonBox {...boxProps(this.props, NeonInputStyle.wrap, NeonInputStyle.notEditable)} >
                <div
                    className={mergeClasses(NeonInputStyle.textInput, NeonInputStyle.notEditableInput)}
                    onClick={this._handleClickShowing}
                    tabIndex={this.props.tabIndex}>
                    {this.props.value}
                </div>
            </NeonBox>);
        }
    }

    public _handleClickShowing() {

        if (!Boolean(this.props.disabled)) {

            this.setState({
                editing: true,
            });
        }
    }
}

export const NeonEditableText: ThemedComponent<NeonEditableTextProps> = withConsumer<NeonEditableTextProps>(NeonEditableTextBase);
