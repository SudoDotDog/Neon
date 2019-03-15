/**
 * @author WMXPY
 * @namespace Neon_Pivot_Style
 * @description Header
 */

import { COLOR } from "../../#common/declare";
import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonHeaderStyleBase: JSSStyle = {

    header: {
        position: 'relative',
        backgroundColor: COLOR.WHITE,
        borderBottomColor: COLOR.NAVY,
        borderBottomStyle: 'solid',
    },

    logo: {
        position: 'absolute',
        left: '0.5rem',
        top: '0.5rem',
    },

    normal: {
        height: '2rem',
        borderWidth: '0.3rem',
    },
    medium: {
        height: '2.5rem',
        borderWidth: '0.4rem',
    },
    large: {
        height: '3rem',
        borderWidth: '0.5rem',
    },
    full: {
        height: '3.5rem',
        borderWidth: '0.6rem',
    },
};

export const NeonHeaderStyle: NeonStyle = NeonStyle.create(NeonHeaderStyleBase, 'Paper');
