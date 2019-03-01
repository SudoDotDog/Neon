/**
 * @author WMXPY
 * @namespace Neon_Button_Style
 * @description Shine
 */

import { COLOR } from "../../#common/declare";
import { JSSStyle, migrateFocusStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

export const NeonShineStyleBase: JSSStyle = {

    button: {
        backgroundColor: COLOR.WHITE,
        border: 0,
        borderLeftWidth: '0.3rem',
        borderLeftStyle: 'solid',
        borderLeftColor: COLOR.NAVY,

        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.2s',
        overflow: 'hidden',
        width: '100%',
        padding: '0 0.3rem',
        ...migrateFocusStyle(),

        '&:active': {
            borderLeftColor: COLOR.BLUE,
            color: COLOR.NAVY,
        },
    },
    hoverable: {
        '&:hover': {
            borderLeft: `0.5rem solid ${COLOR.NAVY}`,
        },
    },

    disabled: {
        cursor: 'not-allowed',
        color: COLOR.DARKGRAY,
        borderColor: COLOR.DARKGRAY,
    },

    normal: {
        height: '2rem',
        fontSize: '1rem',
    },
    medium: {
        height: '3rem',
        fontSize: '1.2rem',
    },
    large: {
        height: '4rem',
        fontSize: '1.4rem',
    },
    full: {
        height: '100%',
    },
};

export const NeonShineStyle: NeonStyle = NeonStyle.create(NeonShineStyleBase, 'Shine');
