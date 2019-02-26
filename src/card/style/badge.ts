/**
 * @author WMXPY
 * @namespace Neon_Card_Style
 * @description Badge
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonBadgeStyleBase: JSSStyle = {

    upper: {
        flex: 1,
    },
    lower: {
        minHeight: '30%',
    },
};

export const NeonBadgeStyle: NeonStyle = NeonStyle.create(NeonBadgeStyleBase);
