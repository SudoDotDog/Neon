/**
 * @author WMXPY
 * @namespace Neon_Dash_Style
 * @description Dash
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle, migrateActiveStyle, migrateFocusStyle, migratePureFocusStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonDashStyleBase: JSSStyle = {

    wrap: {
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',

        position: 'relative',
    },
    button: {
        border: 0,
        padding: 0,
        cursor: 'pointer',
        width: '100%',
        height: '100%',
        backgroundColor: COLOR.WHITE,

        ...getBorderStyle('0.3rem'),
        ...migrateActiveStyle(),
        ...migrateFocusStyle(),
    },
    dash: {
        zIndex: 7,
        border: 0,
        padding: 0,
        position: 'absolute',
        top: '0.3rem',
        right: '0.3rem',
    },
    dashClickable: {
        zIndex: 7,
        border: 0,
        padding: 0,
        cursor: 'pointer',
        position: 'absolute',
        top: '0.3rem',
        right: '0.3rem',
        transition: '0.2s width, 0.2s height',

        ...migratePureFocusStyle(),
    },

    error: {
        backgroundColor: COLOR.LIGHT_RED,
    },
    warning: {
        backgroundColor: COLOR.ORANGE,
    },
    succeed: {
        backgroundColor: COLOR.GREEN,
    },
    plain: {
        backgroundColor: COLOR.NAVY,
    },

    disabledButton: {
        cursor: 'not-allowed',
        color: COLOR.DARKGRAY,
        borderColor: COLOR.DARKGRAY,
    },
    disabledDash: {
        backgroundColor: COLOR.DARKGRAY,
    },
};

export const NeonDashStyle: NeonStyle = NeonStyle.create(NeonDashStyleBase);
