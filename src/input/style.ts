/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../#common/declare";
import { getBorderStyle, JSSStyle } from "../#common/style/decorator";

const NeonInputStyleBase: JSSStyle = {

    wrap: {

        position: 'relative',
        padding: '0.2rem',
        cursor: 'text',
        backgroundColor: COLOR.WHITE,

        ...getBorderStyle(),
    },
    pair: {

        backgroundColor: COLOR.NAVY,
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'system-ui',
    },
    pairLabel: {

        color: COLOR.WHITE,
        fontWeight: 'bold',

        textAlign: 'right',
        paddingTop: '0.2rem',
        paddingRight: '0.6rem',
        paddingLeft: '0.6rem',

        flex: 1,
    },
    pairText: {

        flex: 5,
    },
    pairRaw: {

        flex: 5,
        backgroundColor: COLOR.WHITE,
        color: COLOR.NAVY,

        padding: '0.2rem',
        paddingTop: '0.6rem',
        fontSize: '1rem',
        height: '1.4rem',

        ...getBorderStyle(),
    },
    text: {

        padding: '0.2rem',
        cursor: 'text',
        backgroundColor: COLOR.WHITE,

        ...getBorderStyle(),
    },
    borderLite: {

        borderWidth: 0,
        borderBottomWidth: '0.2rem',
    },
    notEditable: {

        paddingLeft: '0.3rem',
        borderStyle: 'dashed',
    },
    notEditableInput: {

        marginTop: '1px',

        fontFamily: 'system-ui',
        fontSize: '1rem',
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
        paddingTop: '0.3rem',

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
