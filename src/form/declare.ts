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

export type FromStructure = {

    form: Record<string, FORM_TYPE>;
};
