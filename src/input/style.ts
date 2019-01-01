/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Style
 */

import { COLOR } from "../common/color";
import { JSSStyle } from "../common/style";

export const NeonInputStyle: JSSStyle = {

    wrap: {

        position: 'relative',
        border: `0.2rem solid ${COLOR.NAVY}`,

        padding: '0.1rem',
        paddingLeft: '0.3rem',

        cursor: 'text',
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
        fontSize: '0.5rem',
    },
    input: {

        border: '0',
        marginTop: '0.2rem',
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
