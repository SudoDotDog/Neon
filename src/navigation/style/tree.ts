/**
 * @author WMXPY
 * @namespace Neon_Navigation_Style
 * @description Tree
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonTreeStyleBase: JSSStyle = {

    selected: {
        borderLeftWidth: '0.5rem !important',
        fontWeight: 'bold',

        '&:hover': {
            borderLeftWidth: '0.6rem !important',
        },
    },
};

export const NeonTreeStyle: NeonStyle = NeonStyle.create(NeonTreeStyleBase);
