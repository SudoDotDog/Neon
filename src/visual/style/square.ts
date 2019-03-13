/**
 * @author WMXPY
 * @namespace Neon_Visual_Style
 * @description Square
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonSquareStyleBase: JSSStyle = {

    outer: {
        position: 'relative',
        paddingBottom: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
        height: 'auto',
    },
    inner: {
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
    },
};

export const NeonSquareStyle: NeonStyle = NeonStyle.create(NeonSquareStyleBase, 'Square');
