/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Editable
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, withConsumer } from "../#common/consumer";
import { assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { NeonInputStyle } from "./style";
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

    public constructor(props: NeonEditableTextProps) {

        super(props);

        this._origin = props.value;
        this._handleBlur = this._handleBlur.bind(this);
        this._handleClickShowing = this._handleClickShowing.bind(this);
    }

    public render() {

        if (this.state.editing) {

            return (
                <NeonText
                    {...this.props}
                    autofocus
                    onBlur={this._handleBlur}
                    ignoreTheme={this.props.ignoreTheme}
                />
            );
        } else {

            return (<NeonBox
                {...boxProps(
                    this.props,
                    NeonInputStyle.wrap,
                    NeonInputStyle.notEditable,
                    assertIfTrue(this.props.lite, NeonInputStyle.borderLite),
                )}
            >
                <div
                    className={mergeClasses(NeonInputStyle.textInput, NeonInputStyle.notEditableInput)}
                    onClick={this._handleClickShowing}
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
