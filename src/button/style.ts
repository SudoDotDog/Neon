/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Style
 */

import { COLOR } from "../common/color";
import { getBorderHoverStyle, JSSStyle } from "../common/style";

export const NeonButtonStyle: JSSStyle = {

    button: {

        backgroundColor: COLOR.WHITE,
        width: '100%',
        height: '2rem',

        cursor: 'pointer',
        outline: 0,

        fontSize: '1rem',
        fontWeight: 'bold',

        '&:active': {
            backgroundColor: COLOR.LIME,
        },

        '&:focus': {
            color: COLOR.DARKGRAY,
        },

        ...getBorderHoverStyle(),
    },
};