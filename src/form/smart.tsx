/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Smart
 */

import * as React from "react";
import { boxProps } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { NeonButton } from "../button/index";
import { MARGIN, SIZE, WIDTH } from "../declare/index";
import { FLAG_TYPE, NeonFlag } from "../flag/index";
import { NeonInput } from "../input/index";
import { NeonIndicator } from "../spinner/index";
import { NeonTitle } from "../typography/title";
import { NeonFromStructure, parseStructure, RenderableFormElement } from "./structure";

export type NeonSmartFormProps = {

    readonly title?: string;

    readonly flag?: FLAG_TYPE;
    readonly message?: string;
    readonly info?: string;

    readonly loading?: boolean;
    readonly covering?: boolean;
    readonly cover?: React.ReactNode;

    readonly form: NeonFromStructure;

    readonly rift?: MARGIN;
    readonly submit?: string;
    readonly onSubmit: <T>(content: T) => void;
} & BoxProps;

export type NeonSmartFormStates = {

    readonly current: Record<string, any>;
};

export class NeonSmartForm extends React.Component<NeonSmartFormProps, NeonSmartFormStates> {

    public readonly state: NeonSmartFormStates = {

        current: {},
    };

    public constructor(props: NeonSmartFormProps) {

        super(props);

        this._submit = this._submit.bind(this);
    }

    public render(): React.ReactNode {

        return (
            <NeonIndicator
                {...boxProps(this.props)}
                loading={this.props.loading}
                covering={this.props.covering}
                cover={this.props.cover}
            >
                {this._renderTitle()}
                {this._renderWarning()}
                {this._renderForm()}
                {this._renderSubmit()}
            </NeonIndicator>
        );
    }

    private _submit(): void {
        this.props.onSubmit(this._getResponse());
    }

    private _renderTitle(): React.ReactNode {

        if (!Boolean(this.props.title)) {
            return null;
        }

        return (<NeonTitle ignoreTheme margin={this._getMargin()}>
            {this.props.title}
        </NeonTitle>);
    }

    private _renderWarning(): React.ReactNode {

        if (!Boolean(this.props.message)) {
            return null;
        }

        return (<NeonFlag
            type={this.props.flag || FLAG_TYPE.PLAIN}
            info={this.props.info}
            ignoreTheme
            margin={this._getMargin()}
        >
            {this.props.message}
        </NeonFlag>);
    }

    private _renderForm(): React.ReactNode {

        const renderableStructure: RenderableFormElement[] = parseStructure(this.props.form);

        return renderableStructure.map((element: RenderableFormElement) =>
            (<NeonInput
                key={element.key}
                label={element.display}
                value={this._getValue(element.key, element.defaultValue)}
                onEnter={this._submit}
                onChange={this._getSetValueFunction(element.key)}
                type={element.type}
                ignoreTheme
                margin={this._getMargin()}
            />),
        );
    }

    private _renderSubmit(): React.ReactNode {

        return (<NeonButton
            key="__neon_submit_button"
            width={WIDTH.FULL}
            size={SIZE.MEDIUM}
            onClick={this._submit}
            ignoreTheme
            margin={this._getMargin()}
        >
            {this.props.submit || 'Submit'}
        </NeonButton>);
    }

    private _getMargin(): MARGIN {

        return this.props.rift || MARGIN.SMALL;
    }

    private _getValue(key: string, defaultValue: any): any {

        if (this.state.current[key]) {
            return this.state.current[key];
        }

        if (this.state.current[key] === undefined) {
            return defaultValue;
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

        const renderableStructure: RenderableFormElement[] = parseStructure(this.props.form);

        return renderableStructure.reduce((previous: Record<string, any>, current: RenderableFormElement) => ({
            ...previous,
            [current.key]: this._getValue(current.key, current.defaultValue),
        }), {} as Record<string, any>);
    }
}
