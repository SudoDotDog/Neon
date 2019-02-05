/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Smart
 */

import { keys } from "@sudoo/bark/map";
import * as React from "react";
import { NeonButton } from "../button/index";
import { MARGIN, SIZE, WIDTH } from "../declare/index";
import { FLAG_TYPE, NeonFlag } from "../flag/index";
import { INPUT_TYPE, NeonInput } from "../input/index";
import { NeonIndicator } from "../spinner/index";

export type NeonSmartFormProps = {

    readonly title?: string;

    readonly flag?: FLAG_TYPE;
    readonly message?: string;
    readonly info?: string;

    readonly loading?: boolean;

    readonly form: Record<string, INPUT_TYPE>;
    readonly defaultValue?: Record<string, any>;

    readonly margin?: MARGIN;
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

    public render(): React.ReactNode {

        return (
            <NeonIndicator
                loading={this.props.loading || false}
            >
                {this._renderWarning()}
                {this._renderForm()}
                {this._renderSubmit()}
            </NeonIndicator>
        );
    }

    private _submit(): void {
        this.props.onSubmit(this._getResponse());
    }

    private _renderWarning(): React.ReactNode {

        const hidden: boolean = !Boolean(this.props.message);

        return (<NeonFlag
            hidden={hidden}
            type={this.props.flag || FLAG_TYPE.PLAIN}
            info={this.props.info}
            ignoreTheme
            margin={this.props.margin || MARGIN.SMALL}
        >
            {this.props.message}
        </NeonFlag>);
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
                ignoreTheme
                margin={this.props.margin || MARGIN.SMALL}
            />);
        });
    }

    private _renderSubmit(): React.ReactNode {

        return (<NeonButton
            key="__neon_submit_button"
            width={WIDTH.FULL}
            size={SIZE.MEDIUM}
            onClick={this._submit}
            ignoreTheme
            margin={this.props.margin || MARGIN.SMALL}
        >
            {this.props.submit || 'Submit'}
        </NeonButton>);
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
