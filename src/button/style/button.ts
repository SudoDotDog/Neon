/**
 * @author WMXPY
 * @namespace Neon_Button_Style
 * @description Button
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, getFocusStyle, JSSStyle, migrateFocusStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonButtonStyleBase: JSSStyle = {

    button: {
        padding: '0px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '0px',
        outline: '0px !important',
        '&:active': {
            ...getFocusStyle(),
            borderColor: COLOR.BLUE,
        },
        ...migrateFocusStyle(),
        ...getBorderStyle(),
    },
    disabled: {
        cursor: 'not-allowed',
        color: COLOR.DARKGRAY,
        borderColor: COLOR.DARKGRAY,
    },

    sizeNormal: {
        width: '5rem',
        height: '2rem',
        fontSize: '1rem',
    },
    sizeMedium: {
        width: '7rem',
        height: '3rem',
    },
    sizeLarge: {
        width: '9rem',
        height: '4rem',
        fontSize: '1.2rem',
    },
    sizeFullBox: {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
    },
    sizeFull: {
        width: '100%',
        height: '100%',
    },

    full: {
        width: '100%',
    },
};

export const NeonButtonStyle: NeonStyle = NeonStyle.create(NeonButtonStyleBase, 'Button');
