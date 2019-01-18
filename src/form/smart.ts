/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Smart
 */

import { _Map } from "@sudoo/bark";
import * as React from "react";
import { ExcludeTheme } from "../#common/consumer";
import { NeonButton } from "../button/index";
import { SIZE, WIDTH } from "../declare/index";
import { INPUT_TYPE, NeonInput, NeonInputProps } from "../input";

export type NeonSmartFormProps = {

    readonly form: Record<string, INPUT_TYPE>;
    readonly defaultValue?: Record<string, any>;

    readonly submit?: string;
    readonly onSubmit: <T>(content: T) => void;
};

export type NeonSmartFormStates = {

    readonly current: Record<string, any>;
};

export class NeonSmartForm extends React.Component<NeonSmartFormProps, NeonSmartFormStates> {

    public state: NeonSmartFormStates = {

        current: this._getDefaultValue(),
    };

    public render(): JSX.Element {

        return React.createElement(React.Fragment, {}, [
            this._renderForm(),
            this._renderSubmit(),
        ]);
    }

    private _renderSubmit(): React.ReactNode {

        return React.createElement(NeonButton, {

            key: '__neon_submit_button',
            width: WIDTH.FULL,
            size: SIZE.MEDIUM,
            onClick: () => this.props.onSubmit(this.state.current),
        }, this.props.submit || 'Submit');
    }

    private _renderForm(): React.ReactNode {

        return _Map.keys(this.props.form).map((key: string) => {

            const type: INPUT_TYPE = this.props.form[key];

            const inputProps: ExcludeTheme<{ key: string } & NeonInputProps> = {

                key,
                label: key,
                value: this.state.current[key],
                onChange: (value: any) => {
                    this.setState({
                        current: {
                            ...this.state.current,
                            [key]: value,
                        },
                    });
                },
                type,
            };

            return React.createElement(NeonInput, inputProps);
        });
    }

    private _getDefaultValue(): Record<string, any> {

        const defaultValue: Record<string, any> = this.props.defaultValue || {};

        return _Map.keys(this.props.form)
            .reduce((previous: Record<string, any>, current: string) => {

                return {

                    ...previous,
                    [current]: defaultValue[current] || '',
                };
            }, {});
    }
}
