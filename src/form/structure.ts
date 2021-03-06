/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Structure
 */

import { _Map } from "@sudoo/bark/map";
import { INPUT_TYPE } from "../input/declare";

export type FromElement = {

    readonly type: INPUT_TYPE;
    readonly autofocus?: boolean;
    readonly defaultValue?: any;
    readonly display?: string;
};

export type RenderableFormElement = {

    readonly autofocus: boolean;
    readonly type: INPUT_TYPE;
    readonly defaultValue: any;
    readonly display: string;
    readonly key: string;
};

export type NeonFromStructure = Record<string, INPUT_TYPE | FromElement>;

export const parseStructure = (structure: NeonFromStructure): RenderableFormElement[] => {

    return _Map.keys(structure).map((key: string): RenderableFormElement => {

        const value: INPUT_TYPE | FromElement = structure[key];

        if (typeof value === 'string') {
            return {
                autofocus: false,
                defaultValue: '',
                display: key,
                key,
                type: value,
            };
        }

        return {
            autofocus: value.autofocus || false,
            defaultValue: value.defaultValue || '',
            display: value.display || key,
            key,
            type: value.type,
        };
    });
};
