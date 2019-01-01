/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Style
 */

import { COLOR } from "../common/color";
import { JSSStyle } from "../common/style";

export const NeonInputStyle: JSSStyle = {

    label: {
        'backgroundColor': COLOR.RED,
        '&:hover': {
            color: COLOR.RED,
        },
    },
};
