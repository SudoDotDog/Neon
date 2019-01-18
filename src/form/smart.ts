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

export type SmartFormProps = {

    readonly form: Record<string, INPUT_TYPE>;
    readonly submit?: string;
    readonly onSubmit: <T>(content: T) => void;
};

export type SmartFormStates = {

    readonly current: Record<string, any>;
};

export class SmartForm extends React.Component<SmartFormProps, SmartFormStates> {

    public state: SmartFormStates = {

        current: {},
    };

    public render(): JSX.Element {

        return React.createElement(React.Fragment, {}, [
            this._renderForm(),
            this._renderSubmit(),
        ]);
    }

    private _renderSubmit(): React.ReactNode {

        return React.createElement(NeonButton, {

            width: WIDTH.FULL,
            size: SIZE.MEDIUM,
            onClick: () => this.props.onSubmit(this._getResponse()),
        }, this.props.submit || 'Submit');
    }

    private _renderForm(): React.ReactNode {

        return _Map.keys(this.props.form).map((key: string) => {

            const type: INPUT_TYPE = this.props.form[key];

            const inputProps: ExcludeTheme<{ key: string } & NeonInputProps> = {

                key,
                label: key,
                value: this.state.current[key] || '',
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

    private _getResponse(): Record<string, any> {

        const empty: Record<string, ''> = _Map.keys(this.props.form)
            .reduce((previous: Record<string, ''>, current: string) => {

                return {

                    ...previous,
                    [current]: '',
                };
            }, {});

        return {

            ...empty,
            ...this.state.current,
        };
    }
}
