/**
 * @author WMXPY
 * @namespace Neon_Table
 * @description Style
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonListStyleBase: JSSStyle = {

    list: {

        width: '100%',

        borderCollapse: 'collapse',

        ...getBorderStyle(),
        borderLeftWidth: '0.6rem',

        '& th': {

            cursor: 'default',
            padding: '0.3rem',
            color: COLOR.NAVY,

            borderBottom: `0.2rem solid ${COLOR.NAVY}`,
        },

        '& td': {

            borderLeft: `0.1rem solid ${COLOR.NAVY}`,
            borderRight: `0.1rem solid ${COLOR.NAVY}`,
        },
    },
    withBorder: {

        padding: '0.5rem',
        borderTop: `0.1rem solid ${COLOR.NAVY}`,
        borderBottom: `0.1rem solid ${COLOR.NAVY}`,
    },
    listKey: {

        width: '30%',
    },
};

export const NeonListStyle: NeonStyle = NeonStyle.create(NeonListStyleBase);
