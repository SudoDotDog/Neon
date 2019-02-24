/**
 * @author WMXPY
 * @namespace Neon_Paper_Style
 * @description Paper
 */

import { COLOR } from "../../#common/declare";
import { getBorder, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonPaperStyleBase: JSSStyle = {

    wrap: {

        padding: '1rem',
        boxShadow: '3px 3px 5px -2px rgba(0, 30, 60, 0.3)',
        backgroundColor: COLOR.WHITE,

        ...getBorder(COLOR.GRAY, '1px'),
    },
};

export const NeonPaperStyle: NeonStyle = NeonStyle.create(NeonPaperStyleBase);
