/**
 * @author WMXPY
 * @namespace Neon_Pill_Style
 * @description Group
 */

import { COLOR } from "../../#common/declare";
import { JSSStyle, migrateFocusStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonGroupStyleBase: JSSStyle = {

    group: {

        display: 'flex',
    },
    add: {

        height: '1.7rem',
        backgroundColor: COLOR.NAVY,
        cursor: 'pointer',
    },
    select: {

        border: 0,
        backgroundColor: COLOR.TRANSPARENT,
        outline: 0,
        color: COLOR.WHITE,
        height: '100%',
        cursor: 'pointer',

        ...migrateFocusStyle(),
    },
    option: {

        color: COLOR.NAVY,
    },
};

export const NeonGroupStyle: NeonStyle = NeonStyle.create(NeonGroupStyleBase, 'PillGroup');
