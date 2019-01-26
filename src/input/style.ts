/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../#common/declare";
import { getBorderStyle, JSSStyle } from "../#common/style";

const NeonInputStyleBase: JSSStyle = {

    wrap: {

        position: 'relative',
        padding: '0.2rem',
        cursor: 'text',
        backgroundColor: COLOR.WHITE,

        ...getBorderStyle(),
    },
    text: {

        padding: '0.2rem',
        cursor: 'text',
        backgroundColor: COLOR.WHITE,

        ...getBorderStyle(),
    },
    notEditable: {

        borderStyle: 'dashed',
    },
    notEditableInput: {

        display: 'inline-block',
        textIndent: '0px',
        textShadow: 'none',
        marginTop: '1px',
        font: '400 11px system-ui',
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
    textInput: {

        border: '0',
        padding: '0',

        fontSize: '1rem',
        outline: '0',

        width: '100%',
        height: '1.4rem',

        '&:focus': {
            color: COLOR.DARKGRAY,
        },
    },
};

const NeonApplicableStyleBase: JSSStyle = {

    wrap: {

        display: 'flex',
    },
    input: {

        flex: 1,
    },
    button: {
        height: 'auto',
        transition: '0.4s all ease-in-out',
        overflow: 'hidden',
    },
    buttonNormal: {
        width: '5rem',
    },
    buttonMedium: {
        width: '7rem',
    },
    buttonLarge: {
        width: '9rem',
    },
    buttonDisable: {
        width: 0,
    },
};

export const NeonInputStyleSheet: StyleSheet = jss.createStyleSheet(NeonInputStyleBase).attach();
export const NeonInputStyle: Classes = NeonInputStyleSheet.classes;

export const NeonApplicableStyleSheet: StyleSheet = jss.createStyleSheet(NeonApplicableStyleBase).attach();
export const NeonApplicableStyle: Classes = NeonApplicableStyleSheet.classes;
