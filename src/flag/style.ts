/**
 * @author WMXPY
 * @namespace Neon_Flag
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../common/declare";
import { getBorderStyle, JSSStyle } from "../common/style";

const NeonFlagStyleBase: JSSStyle = {

    flag: {

        ...getBorderStyle(),

        height: '1.5rem',
        borderLeftWidth: '0.6rem',
        padding: '0.2rem',
        paddingLeft: '0.4rem',

        fontSize: '1rem',
        fontWeight: 'bold',
    },
    error: {

        backgroundColor: COLOR.LIGHT_RED,
        color: COLOR.WHITE,
    },
    warning: {

        backgroundColor: COLOR.ORANGE,
        color: COLOR.WHITE,
    },
};

export const NeonFlagStyleSheet: StyleSheet = jss.createStyleSheet(NeonFlagStyleBase).attach();
export const NeonFlagStyle: Classes = NeonFlagStyleSheet.classes;
