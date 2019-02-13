/**
 * @author WMXPY
 * @namespace Neon_Theme
 * @description Declare
 */

import { COLOR } from "../#common/declare";
import { MARGIN } from "../declare";

export type NeonTheme = {

    readonly main: {
        readonly color: string;
    };
    readonly margin: MARGIN;
    readonly separator: boolean;
};

export const getDefaultTheme = (): NeonTheme => ({
    main: {
        color: COLOR.NAVY,
    },
    margin: MARGIN.NONE,
    separator: true,
});
