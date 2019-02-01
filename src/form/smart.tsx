/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Smart
 */

import { keys } from "@sudoo/bark/map";
import * as React from "react";
import { NeonButton } from "../button/index";
import { SIZE, WIDTH } from "../declare/index";
import { INPUT_TYPE, NeonInput } from "../input/index";

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

        current: {},
    };

    public constructor(props: NeonSmartFormProps) {

        super(props);

        this._submit = this._submit.bind(this);
    }

    public render(): JSX.Element {

        return React.createElement(React.Fragment, {}, [
            this._renderForm(),
            this._renderSubmit(),
        ]);
    }

    private _submit(): void {
        this.props.onSubmit(this._getResponse());
    }

    private _renderSubmit(): React.ReactNode {

        return React.createElement(NeonButton, {

            key: '__neon_submit_button',
            width: WIDTH.FULL,
            size: SIZE.MEDIUM,
            onClick: () => this._submit(),
        }, this.props.submit || 'Submit');
    }

    private _renderForm(): React.ReactNode {

        return keys(this.props.form).map((key: string) => {

            const type: INPUT_TYPE = this.props.form[key];

            return (<NeonInput
                key={key}
                label={key}
                value={this._getValue(key)}
                onEnter={this._submit}
                onChange={this._getSetValueFunction(key)}
                type={type}
            />);
        });
    }

    private _getValue(key: string): any {

        if (this.state.current[key]) {
            return this.state.current[key];
        }

        if (this.props.defaultValue) {
            return this.props.defaultValue[key] || '';
        }

        return '';
    }

    private _getSetValueFunction(key: string): (value: any) => void {

        return (value: any) =>
            this.setState({
                current: {
                    ...this.state.current,
                    [key]: value,
                },
            });
    }

    private _getResponse(): Record<string, any> {

        return keys(this.props.form)
            .reduce((previous: Record<string, any>, current: string) => {

                return {

                    ...previous,
                    [current]: this._getValue(current),
                };
            }, {});
    }
}
