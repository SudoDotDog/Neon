/**
 * @author WMXPY
 * @namespace Neon_Button_Style
 * @description Dropdown
 */

import { getBorderStyle, JSSStyle, migrateFocusStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

export const NeonDropdownButtonStyleBase: JSSStyle = {

    box: {
        ...migrateFocusStyle(),
    },

    wrap: {
        position: 'relative',
    },
    dropdown: {
        width: '100%',
        position: 'absolute',
        zIndex: 5,
        top: '100%',
        left: 0,

        boxSizing: 'border-box',
        ...getBorderStyle(),
    },

    sizeNormal: {
        height: '2rem',
        fontSize: '1rem',
    },
    sizeMedium: {
        height: '3rem',
        fontSize: '1rem',
    },
    sizeLarge: {
        height: '4rem',
        fontSize: '1.2rem',
    },
    sizeFull: {
        height: '100%',
    },
};

export const NeonDropdownButtonStyle: NeonStyle = NeonStyle.create(NeonDropdownButtonStyleBase);
