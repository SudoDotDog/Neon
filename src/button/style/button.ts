/**
 * @author WMXPY
 * @namespace Neon_Button_Style
 * @description Button
 */

import { CSSProperties } from "react";
import { COLOR } from "../../#common/declare";
import { getBorderStyle, getFocusStyle, JSSStyle, migrateFocusStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";
import { NeonTheme } from "../../theme";

const NeonButtonStyleBase: JSSStyle = {

    button: {
        padding: 0,
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: COLOR.WHITE,
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

export const getNeonButtonStyle =
    (theme: NeonTheme): CSSProperties => ({

        backgroundColor: theme.main.color,
    });

export const NeonButtonStyle: NeonStyle = NeonStyle.create(NeonButtonStyleBase);
