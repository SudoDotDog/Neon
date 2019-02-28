/**
 * @author WMXPY
 * @namespace Neon_Context_Style
 * @description Context Menu
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonContextMenuBase: JSSStyle = {

    wrap: {
    },
    menu: {
        width: '15rem',
    },
};

export const NeonContextMenuStyle: NeonStyle = NeonStyle.create(NeonContextMenuBase, 'ContextMenu');
