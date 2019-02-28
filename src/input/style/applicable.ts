/**
 * @author WMXPY
 * @namespace Neon_Input_Style
 * @description Style
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

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

export const NeonApplicableStyle: NeonStyle = NeonStyle.create(NeonApplicableStyleBase, 'Applicable');
