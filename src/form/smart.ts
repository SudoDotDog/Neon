/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Smart
 */

import * as React from "react";
import { NeonInput } from "../input/input";
import { FORM_TYPE, FromStructure } from "./declare";

export type SmartFormType<T extends Record<string, any>> = {

    onSubmit: (content: T) => void;
};

export class SmartForm<T extends Record<string, any>> {

    public static create<T extends Record<string, any>>(structure: FromStructure<T>) {

        return new SmartForm<T>(structure);
    }

    private readonly _structure: FromStructure<T>;

    private constructor(structure: FromStructure<T>) {

        this._structure = structure;
    }

    public getForm(): React.ComponentType<SmartFormType<T>> {

        return (props: SmartFormType<T>) => React.createElement('div');
    }

    private _renderSingle(name: string, type: FORM_TYPE): JSX.Element {

        return React.createElement(NeonInput);
    }
}
