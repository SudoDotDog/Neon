/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Declare
 */

export enum FORM_TYPE {

    STRING = "STRING",
    NUMBER = "NUMBER",
    PASSWORD = "PASSWORD",
    SWITCH = "SWITCH",
}

export type FromStructure<T extends Record<string, any>> = {

    form: Record<keyof T, FORM_TYPE>;
};
