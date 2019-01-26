/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Editable
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, withConsumer } from "../#common/consumer";
import { mergeClasses } from "../#common/style";
import { NeonInput, NeonInputProps } from "./input";
import { NeonInputStyle } from "./style";

export type NeonEditableProps = {

    readonly disabled?: boolean;
    readonly origin?: any;
} & NeonInputProps;

export type NeonEditableStates = {

    readonly editing: boolean;
};

export class NeonEditableBase extends React.Component<NeonEditableProps, NeonEditableStates> {

    public readonly state: NeonEditableStates = {

        editing: false,
    };

    public constructor(props: NeonEditableProps) {

        super(props);

        this._handleClickShowing = this._handleClickShowing.bind(this);
    }

    public render() {

        if (this.state.editing) {

            return (<NeonInput {...this.props} autofocus />);
        } else {

            return (<NeonBox {...boxProps(this.props, NeonInputStyle.wrap, NeonInputStyle.notEditable)} >
                <div
                    className={mergeClasses(NeonInputStyle.label, NeonInputStyle.shrink)}
                    onClick={this._handleClickShowing}>
                    {this.props.label}
                </div>
                <div
                    className={mergeClasses(NeonInputStyle.input, NeonInputStyle.notEditableInput)}
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

export const NeonEditable: ThemedComponent<NeonEditableProps> = withConsumer<NeonEditableProps>(NeonEditableBase);
