/**
 * @author WMXPY
 * @namespace Neon_Flag_Style
 * @description Flag
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle, migrateFocusStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonFlagStyleBase: JSSStyle = {

    flag: {
        ...getBorderStyle(),

        overflow: 'hidden',

        borderLeftWidth: '0.6rem',
        padding: '0.2rem',
        paddingLeft: '0.4rem',

        visibility: 'visible',
    },

    zero: {
        maxHeight: 0,
    },
    normal: {
        maxHeight: '5rem',
    },
    large: {
        maxHeight: '10rem',
    },

    hidden: {
        borderTop: 0,
        borderBottom: 0,

        maxHeight: 0,
        visibility: 'hidden',
    },

    expend: {
        cursor: 'pointer',
        border: 0,
        backgroundColor: COLOR.TRANSPARENT,
        fontWeight: 'bold',

        transition: 'transform 0.2s',

        ...migrateFocusStyle(),
    },
    expended: {
        transform: 'rotate(180deg)',
    },
    shrinked: {
        transform: 'rotate(0deg)',
    },

    main: {
        display: 'flex',
        height: '1.5rem',
    },
    content: {
        flex: 1,

        overflow: 'hidden',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    info: {
        overflow: 'auto',
        fontSize: '1rem',

        transition: '0.2s all',
    },

    error: {
        backgroundColor: COLOR.LIGHT_RED,
        color: COLOR.WHITE,
    },
    warning: {
        backgroundColor: COLOR.ORANGE,
        color: COLOR.WHITE,
    },
    succeed: {
        backgroundColor: COLOR.GREEN,
        color: COLOR.BLACK,
    },
    plain: {
        backgroundColor: COLOR.WHITE,
        color: COLOR.BLACK,
    },
};

export const NeonFlagStyle: NeonStyle = NeonStyle.create(NeonFlagStyleBase, 'Flag');
