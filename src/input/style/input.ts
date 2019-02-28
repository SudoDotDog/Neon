/**
 * @author WMXPY
 * @namespace Neon_Input_Style
 * @description Input
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

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
        left: '0.4rem',

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

export const NeonInputStyle: NeonStyle = NeonStyle.create(NeonInputStyleBase, 'Input');
