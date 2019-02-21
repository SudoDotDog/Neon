/**
 * @author WMXPY
 * @namespace Neon_Swing_Style
 * @description Pagination
 */

import { COLOR } from "../../#common/declare";
import { JSSStyle, migrateFocusStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonPaginationStyleBase: JSSStyle = {

    button: {
        padding: 0,
        paddingLeft: '0.1rem',
        paddingRight: '0.1rem',
        margin: 0,
        border: 0,
        cursor: 'pointer',
        backgroundColor: COLOR.WHITE,
        color: COLOR.GRAY,

        ...migrateFocusStyle(),
    },

    hovering: {
        color: COLOR.ORANGE,
    },
    selecting: {
        color: COLOR.NAVY,
    },
};

export const NeonPaginationStyle: NeonStyle = NeonStyle.create(NeonPaginationStyleBase);
