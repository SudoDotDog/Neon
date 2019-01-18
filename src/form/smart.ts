/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Smart
 */

import * as React from "react";
import { FromStructure } from "./declare";

export type SmartFormType = {

    onSubmit: (content: Record<string, any>) => void;
};

export class SmartForm {

    public static create(structure: FromStructure) {

        return new SmartForm(structure);
    }

    private readonly _structure: FromStructure;

    private constructor(structure: FromStructure) {

        this._structure = structure;
    }

    public getForm(): React.ComponentType<SmartFormType> {

        return (props: SmartFormType) => React.createElement('div');
    }
}
