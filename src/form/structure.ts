/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Structure
 */

import { _Map } from "@sudoo/bark/map";
import { INPUT_TYPE } from "../input/declare";

export type FromElement = {

    type: INPUT_TYPE;
    defaultValue?: any;
    display?: string;
};

export type RenderableFormElement = {

    type: INPUT_TYPE;
    defaultValue: any;
    display: string;
    key: string;
};

export type NeonFromStructure = Record<string, INPUT_TYPE | FromElement>;

export const parseStructure = (structure: NeonFromStructure): RenderableFormElement[] => {

    return _Map.keys(structure).map((key: string): RenderableFormElement => {

        const value: INPUT_TYPE | FromElement = structure[key];

        if (typeof value === 'string') {
            return {
                defaultValue: '',
                display: key,
                key,
                type: value,
            };
        }

        return {
            defaultValue: value.defaultValue || '',
            display: value.display || key,
            key,
            type: value.type,
        };
    });
};
