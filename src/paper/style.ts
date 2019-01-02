/**
 * @author WMXPY
 * @namespace Neon_Paper
 * @description Style
 */

import { COLOR } from "../common/color";
import { getBorder, JSSStyle } from "../common/style";

export const NeonPaperStyle: JSSStyle = {

    wrap: {

        padding: '1rem',
        boxShadow: '3px 3px 5px -2px rgba(0, 30, 60, 0.3)',

        ...getBorder(COLOR.GRAY, '1px'),
    },
};
