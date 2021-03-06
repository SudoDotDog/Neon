/**
 * @author WMXPY
 * @namespace Neon_Float_Style
 * @description Float
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonFloatStyleBase: JSSStyle = {

    float: {
        position: 'fixed',
        bottom: 0,
        right: 0,
    },

    menu: {
        width: '10rem !important',
        position: 'absolute',
        right: 0,
        bottom: '100%',
    },
};

export const NeonFloatStyle: NeonStyle = NeonStyle.create(NeonFloatStyleBase, 'Float');
