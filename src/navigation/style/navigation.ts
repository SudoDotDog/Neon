/**
 * @author WMXPY
 * @namespace Neon_Navigation_Style
 * @description Navigation
 */

import { COLOR } from "../../#common/declare";
import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonNavigationStyleBase: JSSStyle = {

    box: {
        display: 'flex',
    },
    button: {
        borderLeftWidth: '0 !important',
        borderRightWidth: '0 !important',
        borderTop: `0.3rem solid ${COLOR.TRANSPARENT}`,
        borderBottom: `0.3rem solid ${COLOR.TRANSPARENT}`,
        boxSizing: 'border-box',

        '&:hover': {
            borderTop: `0.3rem solid ${COLOR.TRANSPARENT}`,
            borderBottom: `0.3rem solid ${COLOR.ORANGE}`,
        },
        '&:focus': {
            borderTop: `0.3rem solid ${COLOR.TRANSPARENT}`,
            borderBottom: `0.3rem solid ${COLOR.BLUE}`,
        },
        '&.selected': {
            borderTop: `0.3rem solid ${COLOR.TRANSPARENT}`,
            borderBottom: `0.3rem solid ${COLOR.LIME}`,
        },
    },
};

export const NeonNavigationStyle: NeonStyle = NeonStyle.create(NeonNavigationStyleBase);
