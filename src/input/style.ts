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
        border: `5px solid ${COLOR.NAVY}`,
    },
    label: {

        position: 'absolute',
        top: 0,
        left: 0,
    },
    input: {

        backgroundColor: 'red',
        border: '0',
        marginTop: '0.5rem',

        width: '100%',
        height: '2rem',
    },
};
