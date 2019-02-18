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

    peek: {
        transition: 'max-width 0.2s',
        whiteSpace: 'nowrap',
    },
    sizeNormal: {
        fontSize: '0.8rem',
        minWidth: '3rem',
        maxWidth: '3rem',
        height: '3rem',
        padding: '0.2rem',
        '&:hover': {
            maxWidth: '15rem',
        },
        '&.circle': {
            borderRadius: '3rem',
        },
    },
    sizeMedium: {
        fontSize: '1rem',
        minWidth: '4rem',
        maxWidth: '4rem',
        height: '4rem',
        padding: '0.4rem',
        '&:hover': {
            maxWidth: '20rem',
        },
        '&.circle': {
            borderRadius: '4rem',
        },
    },
    sizeLarge: {
        fontSize: '1.2rem',
        minWidth: '5rem',
        maxWidth: '5rem',
        height: '5rem',
        padding: '0.6rem',
        '&:hover': {
            maxWidth: '25rem',
        },
        '&.circle': {
            borderRadius: '5rem',
        },
    },
    sizeFull: {
        fontSize: '1.4rem',
        minWidth: '6rem',
        maxWidth: '6rem',
        height: '6rem',
        padding: '0.8rem',
        '&:hover': {
            maxWidth: '30rem',
        },
        '&.circle': {
            borderRadius: '6rem',
        },
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
