/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Editable
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, withConsumer } from "../#common/consumer";
import { mergeClasses } from "../#common/style/decorator";
import { NeonInput, NeonInputProps } from "./input";
import { NeonInputStyle } from "./style/input";

export type NeonEditableProps = {

    readonly disabled?: boolean;
} & NeonInputProps;

export type NeonEditableStates = {

    readonly editing: boolean;
};

export class NeonEditableBase extends React.Component<NeonEditableProps, NeonEditableStates> {

    public readonly state: NeonEditableStates = {

        editing: false,
    };

    private readonly _origin: any;

    private readonly _inputStyle: Classes = NeonInputStyle.use();

    public constructor(props: NeonEditableProps) {

        super(props);

        this._origin = props.value;
        this._handleBlur = this._handleBlur.bind(this);
        this._handleClickShowing = this._handleClickShowing.bind(this);
    }

    public render() {

        if (this.state.editing) {

            return (
                <NeonInput
                    {...this.props}
                    autofocus
                    onBlur={this._handleBlur}
                />
            );
        } else {

            return (<NeonBox {...boxProps(
                this.props,
                this._inputStyle.wrap,
                this._inputStyle.notEditable,
            )} >
                <div
                    className={mergeClasses(
                        this._inputStyle.label,
                        this._inputStyle.shrink,
                    )}
                    onClick={this._handleClickShowing}>
                    {this.props.label}
                </div>
                <div
                    className={mergeClasses(
                        this._inputStyle.input,
                        this._inputStyle.notEditableInput,
                    )}
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

    private _handleClickShowing(): void {

        if (!Boolean(this.props.disabled)) {

            this.setState({
                editing: true,
            });
        }
    }
}

export const NeonEditable: ThemedComponent<NeonEditableProps> = withConsumer<NeonEditableProps>(NeonEditableBase);
