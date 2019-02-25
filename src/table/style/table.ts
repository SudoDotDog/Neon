/**
 * @author WMXPY
 * @namespace Neon_Table
 * @description Style
 */

import { COLOR } from "../../#common/declare";
import { getBorder, getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonTableStyleBase: JSSStyle = {

    table: {

        width: '100%',

        borderCollapse: 'collapse',

        ...getBorderStyle(),

        '& th': {

            cursor: 'default',
            padding: '0.5rem',
            backgroundColor: COLOR.NAVY,
            color: COLOR.WHITE,
        },

        '& td': {

            padding: '0.2rem',
            ...getBorder(COLOR.NAVY, '0.1rem'),
        },
    },
};

export const NeonTableStyle: NeonStyle = NeonStyle.create(NeonTableStyleBase);
