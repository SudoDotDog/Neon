/**
 * @author WMXPY
 * @namespace Neon_Visual_Style
 * @description Logo
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonLogoStyleBase: JSSStyle = {

    dark: {

    },
    title: {
        fontSize: '3rem',
    },
    sub: {
        textAlign: 'justify',
    },
};

export const NeonLogoStyle: NeonStyle = NeonStyle.create(NeonLogoStyleBase, 'Logo');
