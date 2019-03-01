/**
 * @author WMXPY
 * @namespace Neon_Context
 * @description Declare
 */

import { NeonMenuItemElement } from "../menu/index";

export type NeonContext = {

    readonly openContextMenu: (x: number, y: number, list: NeonMenuItemElement[]) => void;
};

export const getDefaultNeonContext = (): NeonContext => {

    return {
        openContextMenu: () => {
            throw new Error('[Neon] No provider found');
        },
    };
};
