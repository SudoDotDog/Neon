/**
 * @author WMXPY
 * @namespace Neon_Radio_Style
 * @description Checkbox
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonCheckboxStyleBase: JSSStyle = {

    wrap: {

        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    checkbox: {

        width: '1rem',
        height: '1rem',
        ...getBorderStyle(),
    },
    activated: {

        backgroundColor: COLOR.BLUE,
    },
    inactivated: {

        backgroundColor: COLOR.WHITE,
    },
    hovering: {

        color: COLOR.DARKGRAY,
    },
    label: {

        userSelect: 'none',
        paddingLeft: '0.3rem',
        textAlign: 'left',
        flex: 1,
    },
};

export const NeonCheckboxStyle: NeonStyle = NeonStyle.create(NeonCheckboxStyleBase, 'Checkbox');
