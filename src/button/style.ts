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

    disabled: {

        cursor: 'not-allowed',
        color: COLOR.DARKGRAY,
        borderColor: COLOR.DARKGRAY,
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

export const NeonPeekStyleBase: JSSStyle = {

    circle: {
        borderRadius: '100%',
    },

    sizeNormal: {
        fontSize: '0.8rem',
        width: '3rem',
        height: '3rem',
    },
    sizeMedium: {
        fontSize: '1.1rem',
        width: '4.5rem',
        height: '4.5rem',
    },
    sizeLarge: {
        fontSize: '1.4rem',
        width: '6rem',
        height: '6rem',
    },
    sizeFull: {
        fontSize: '1.7rem',
        width: '7.5rem',
        height: '7.5rem',
    },

    hovering: {
        width: 'auto',
    },
};

export const getNeonButtonStyle =
    (theme: NeonTheme): CSSProperties => ({

        backgroundColor: theme.main.color,
    });

export const NeonButtonStyleSheet: StyleSheet = jss.createStyleSheet(NeonButtonStyleBase).attach();
export const NeonButtonStyle: Classes = NeonButtonStyleSheet.classes;

export const NeonPeekStyleSheet: StyleSheet = jss.createStyleSheet(NeonPeekStyleBase).attach();
export const NeonPeekStyle: Classes = NeonPeekStyleSheet.classes;
