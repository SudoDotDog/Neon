/**
 * @author WMXPY
 * @namespace Neon_Menu_Style
 * @description Menu
 */

import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonMenuStyleBase: JSSStyle = {

    menu: {

        boxSizing: 'border-box',
        width: '100%',
    },
    bordered: {

        ...getBorderStyle(),
    },
};

export const NeonMenuStyle: NeonStyle = NeonStyle.create(NeonMenuStyleBase, 'Menu');
