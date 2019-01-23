/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { CSSProperties } from "react";
import { COLOR } from "../#common/declare";
import { getBorderStyle, JSSStyle, migrateFocusStyle } from "../#common/style";
import { NeonTheme } from "../theme";

const NeonButtonStyleBase: JSSStyle = {

    button: {

        padding: 0,
        cursor: 'pointer',

        fontSize: '1rem',
        fontWeight: 'bold',
        color: COLOR.WHITE,

        '&:active': {
            color: COLOR.WHITE,
            borderColor: COLOR.BLUE,
        },

        ...migrateFocusStyle(),
        ...getBorderStyle(),
    },

    sizeNormal: {
        width: '5rem',
        height: '2rem',
    },
    sizeMedium: {
        width: '7rem',
        height: '3rem',
    },
    sizeLarge: {
        width: '9rem',
        height: '4rem',
    },
    sizeFullBox: {
        boxSizing: 'border-box',
        width: '100%',
        height: 'inherit',
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

export const NeonButtonStyleSheet: StyleSheet = jss.createStyleSheet(NeonButtonStyleBase).attach();
export const NeonButtonStyle: Classes = NeonButtonStyleSheet.classes;
