/**
 * @author WMXPY
 * @namespace Neon_Swing_Style
 * @description Switch
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle, migrateFocusStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonSwitchStyleBase: JSSStyle = {

    wrap: {
        display: 'flex',
        alignItems: 'center',

        ...migrateFocusStyle(),
        ...getBorderStyle(),
    },
    intro: {
        padding: '0.4rem',
        flex: 4,
    },
    room: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0.4rem',
        paddingRight: '0.4rem',

        height: '100%',
        minWidth: '4rem',
        backgroundColor: COLOR.WHITE,
    },
    switch: {
        position: 'absolute',
        transition: 'all 0.2s',
        top: 0,
        '&.not-toggled': {
            left: 0,
        },
        '&.toggled': {
            left: '35%',
        },

        height: '100%',
        width: '65%',
    },

    normal: {
        height: '2rem',
    },
    medium: {
        height: '3rem',
    },
    large: {
        height: '4rem',
    },
    full: {
        height: '5rem',
    },
    relative: {
        height: '100%',
        boxSizing: 'border-box',
    },
};

export const NeonSwitchStyle: NeonStyle = NeonStyle.create(NeonSwitchStyleBase);
