/**
 * @author WMXPY
 * @namespace Neon_Theme
 * @description Declare
 */

import { MARGIN } from "../declare";

export type NeonTheme = {

    margin: MARGIN;
};

export const getDefaultTheme = (): NeonTheme => ({
    margin: MARGIN.NONE,
});
