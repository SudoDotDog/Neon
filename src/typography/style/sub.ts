/**
 * @author WMXPY
 * @namespace Neon_Typography_Style
 * @description Sub
 */

import { COLOR } from "../../#common/declare";
import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonTypographySubStyleBase: JSSStyle = {

    link: {

        textDecoration: 'none',
        cursor: 'pointer',

        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: COLOR.GRAY,
        },
    },
};

export const NeonTypographySubStyle: NeonStyle = NeonStyle.create(NeonTypographySubStyleBase);
