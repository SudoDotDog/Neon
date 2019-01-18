/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Smart
 */

import * as React from "react";

export enum FORM_TYPE {

    STRING = "STRING",
    NUMBER = "NUMBER",
    PASSWORD = "PASSWORD",
    SWITCH = "SWITCH",
}

export type SmartFormProps = {

    form: Record<string, FORM_TYPE>;
    onSubmit: <T>(content: T) => void;
};

export type SmartFormStates = {

};

export class SmartForm extends React.Component<SmartFormProps, SmartFormStates> {

    // public static create<T extends Record<string, any>>(structure: FromStructure<T>) {

    //     return new SmartForm<T>(structure);
    // }

    // private readonly _structure: FromStructure<T>;

    // public getForm(): React.ComponentType<SmartFormType<T>> {

    //     return (props: SmartFormType<T>) => React.createElement('div');
    // }

    // private _renderSingle(name: string, type: FORM_TYPE): JSX.Element {

    //     return React.createElement(NeonInput);
    // }
}
