/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Poll
 */

import * as React from "react";
import { MARGIN } from "../declare";
import { NeonInput } from "../input";
import { NeonFromStructure, parseStructure, RenderableFormElement } from "./structure";

export type NeonSmartPollCut = {

    readonly structure: NeonFromStructure;
    readonly value: Record<string, any>;
    readonly rift?: MARGIN;

    readonly onChange?: <T extends Record<string, any>>(content: T) => void;
    readonly onEnter?: () => void;
};

export type NeonSmartPollProps = NeonSmartPollCut;

export class NeonSmartPoll extends React.Component<NeonSmartPollProps> {

    public render(): React.ReactNode {

        return (
            <React.Fragment>
                {this._renderForm()}
            </React.Fragment>
        );
    }

    private _renderForm(): React.ReactNode {

        const renderableStructure: RenderableFormElement[] = parseStructure(this.props.structure);
        const rift: MARGIN = this.props.rift || MARGIN.TINY;

        return renderableStructure.map((element: RenderableFormElement) =>
            (<NeonInput
                key={element.key}
                autofocus={element.autofocus}
                label={element.display}
                value={this._getValue(element.key, element.defaultValue)}
                onEnter={this.props.onEnter}
                onChange={this._getSetValueFunction(element.key)}
                type={element.type}
                ignoreTheme
                rift={rift}
            />),
        );
    }

    private _getValue(key: string, defaultValue: any): any {

        if (this.props.value[key]) {
            return this.props.value[key];
        }

        if (this.props.value[key] === undefined) {
            return defaultValue;
        }

        return '';
    }

    private _getSetValueFunction(key: string): (value: any) => void {

        if (!this.props.onChange) {

            return () => undefined;
        }

        return (value: any) => {

            const newValue: Record<string, any> = {
                ...this.props.value,
                [key]: value,
            };

            if (this.props.onChange) {
                this.props.onChange(newValue);
            }
        };
    }
}
