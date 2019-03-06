/**
 * @author WMXPY
 * @namespace Neon_Grid_Style
 * @description Grid
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonGridStyleBase: JSSStyle = {

    grid: {
        display: 'grid',
    },
    element: {
        position: 'relative',
        width: '100%',
    },
    inner: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
    },
};

export const NeonGridStyle: NeonStyle = NeonStyle.create(NeonGridStyleBase, 'Grid');
