/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../common/declare";
import { getBorderHoverStyle, JSSStyle } from "../common/style";

const NeonInputStyleBase: JSSStyle = {

    wrap: {

        position: 'relative',

        padding: '0.2rem',

        cursor: 'text',

        ...getBorderHoverStyle(),
    },
    label: {

        position: 'absolute',
        top: '0.8rem',

        fontSize: '1rem',
        fontWeight: 'bold',
        userSelect: 'none',

        transition: '0.2s all',
    },
    shrink: {

        top: '0.1rem',
        left: '0.2rem',
        fontSize: '0.8rem',
    },
    input: {

        border: '0',
        paddingTop: '0.8rem',

        fontSize: '1rem',
        outline: '0',

        width: '100%',
        height: '1.4rem',

        '&:focus': {
            color: COLOR.DARKGRAY,
        },
    },
};

export const NeonInputStyleSheet: StyleSheet = jss.createStyleSheet(NeonInputStyleBase).attach();
export const NeonInputStyle: Classes = NeonInputStyleSheet.classes;
