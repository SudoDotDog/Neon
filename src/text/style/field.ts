/**
 * @author WMXPY
 * @namespace Neon_Text_Style
 * @description Field
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonTextFieldStyleBase: JSSStyle = {

    wrap: {
        position: 'relative',
        cursor: 'text',
        backgroundColor: COLOR.WHITE,

        ...getBorderStyle(),
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
    area: {
        border: '0',
        outline: '0',
        width: '100%',
        height: '100%',
        resize: 'none',
        fontSize: '1rem',
        boxSizing: 'border-box',

        paddingTop: '1rem',
        paddingLeft: '0.2rem',
        paddingRight: '0.2rem',
        paddingBottom: '0.2rem',

        '&:focus': {
            color: COLOR.DARKGRAY,
        },
    },

    normal: {
        height: '5rem',
    },
    medium: {
        height: '8rem',
    },
    large: {
        height: '11rem',
    },
    full: {
        height: '14rem',
    },
    relative: {
        height: '100%',
    },
};

export const NeonTextFieldStyle: NeonStyle = NeonStyle.create(NeonTextFieldStyleBase);
