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
        readonly text: string;
    };
    readonly margin: MARGIN;
    readonly rift: MARGIN;
    readonly separator: boolean;
};

export const getDefaultTheme = (): NeonTheme => ({
    main: {
        color: COLOR.NAVY,
        text: COLOR.WHITE,
    },
    margin: MARGIN.NONE,
    rift: MARGIN.NONE,
    separator: true,
});
