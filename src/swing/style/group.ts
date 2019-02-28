/**
 * @author WMXPY
 * @namespace Neon_Swing_Style
 * @description Button Group
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonButtonGroupStyleBase: JSSStyle = {

    box: {

        display: 'flex',
    },
    button: {
    },
};

export const NeonButtonGroupStyle: NeonStyle = NeonStyle.create(NeonButtonGroupStyleBase, 'ButtonGroup');
