/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../common/declare";
import { getBorderStyle, JSSStyle } from "../common/style";

const NeonButtonStyleBase: JSSStyle = {

    button: {

        backgroundColor: COLOR.WHITE,
        width: '5rem',
        height: '2rem',
        padding: 0,

        cursor: 'pointer',
        outline: 0,

        fontSize: '1rem',
        fontWeight: 'bold',

        '&:active': {
            borderColor: COLOR.BLUE,
        },

        '&:focus': {
            color: COLOR.DARKGRAY,
        },

        ...getBorderStyle(),
    },

    full: {

        width: '100%',
    },
};

export const NeonButtonStyleSheet: StyleSheet = jss.createStyleSheet(NeonButtonStyleBase).attach();
export const NeonButtonStyle: Classes = NeonButtonStyleSheet.classes;
