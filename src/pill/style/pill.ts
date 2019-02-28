/**
 * @author WMXPY
 * @namespace Neon_Pill_Style
 * @description Pill
 */

import { COLOR } from "../../#common/declare";
import { getBorder, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonPillStyleBase: JSSStyle = {

    wrap: {

        display: 'inline-flex',
        alignItems: 'center',
        height: '1.5rem',
        ...getBorder(COLOR.NAVY, '0.1rem'),
    },
    info: {

        paddingLeft: '0.3rem',
        paddingRight: '0.3rem',
        flex: 1,
    },
    remove: {

        width: '1.5rem',
    },
};

export const NeonPillStyle: NeonStyle = NeonStyle.create(NeonPillStyleBase, 'Pill');
