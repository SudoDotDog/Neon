/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { CSSProperties } from "react";
import { COLOR } from "../#common/declare";
import { getBorderStyle, JSSStyle } from "../#common/style";
import { NeonTheme } from "../theme";

const NeonButtonStyleBase: JSSStyle = {

    button: {
        padding: 0,

        cursor: 'pointer',
        outline: 0,

        fontSize: '1rem',
        fontWeight: 'bold',
        color: COLOR.WHITE,

        '&:focus': {
            color: COLOR.GRAY,
        },

        '&:active': {
            color: COLOR.WHITE,
            borderColor: COLOR.BLUE,
        },

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
    sizeFull: {
        width: '9rem',
        height: '4rem',
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
