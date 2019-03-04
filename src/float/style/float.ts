/**
 * @author WMXPY
 * @namespace Neon_Float_Style
 * @description Dash
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonFloatStyleBase: JSSStyle = {

    float: {
        position: 'fixed',
        bottom: 0,
        right: 0,
    },
};

export const NeonFloatStyle: NeonStyle = NeonStyle.create(NeonFloatStyleBase, 'Float');