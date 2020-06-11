/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Editable
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, withConsumer } from "../#common/consumer";
import { assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { NeonInputStyle } from "./style/input";
import { NeonText, NeonTextProps } from "./text";

export type NeonEditableTextProps = {

    readonly list?: boolean;
    readonly disabled?: boolean;
} & NeonTextProps;

export type NeonEditableTextStates = {

    readonly editing: boolean;
};

export class NeonEditableTextBase extends React.Component<NeonEditableTextProps, NeonEditableTextStates> {

    public readonly state: NeonEditableTextStates = {

        editing: false,
    };

    private readonly _origin: any;

    private readonly _inputStyle: Classes = NeonInputStyle.use();

    public constructor(props: NeonEditableTextProps) {

        super(props);

        this._origin = props.value;
    }

    public render() {

        if (this.state.editing) {

            return (
                <NeonText
                    {...this.props}
                    autofocus
                    onBlur={this._handleBlur.bind(this)}
                    ignoreTheme={this.props.ignoreTheme}
                />
            );
        } else {

            return (<NeonBox
                {...boxProps(
                    this.props,
                    this._inputStyle.wrap,
                    this._inputStyle.notEditable,
                    assertIfTrue(this.props.lite, this._inputStyle.borderLite),
                )}
            >
                <div
                    className={mergeClasses(
                        this._inputStyle.textInput,
                        this._inputStyle.notEditableInput,
                    )}
                    onClick={this._handleClickShowing.bind(this)}
                    tabIndex={this.props.tabIndex}>
                    {this.props.value}
                </div>
            </NeonBox>);
        }
    }

    private _handleBlur(): void {

        if (this._origin === this.props.value) {
            this.setState({
                editing: false,
            });
        }
    }

    private _handleClickShowing() {

        if (!Boolean(this.props.disabled)) {

            this.setState({
                editing: true,
            });
        }
    }
}

export const NeonEditableText: ThemedComponent<NeonEditableTextProps> = withConsumer<NeonEditableTextProps>(NeonEditableTextBase);
