/**
 * @author WMXPY
 * @namespace Neon_Theme
 * @description Declare
 */

import { COLOR } from "../common/declare";
import { MARGIN } from "../declare";

export type NeonTheme = {

    main: {
        color: string;
    };
    margin: MARGIN;
};

export const getDefaultTheme = (): NeonTheme => ({
    main: {
        color: COLOR.NAVY,
    },
    margin: MARGIN.NONE,
});
