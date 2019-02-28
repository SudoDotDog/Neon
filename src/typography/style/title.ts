/**
 * @author WMXPY
 * @namespace Neon_Typography_Style
 * @description Title
 */

import { Classes } from "jss";
import { COLOR } from "../../#common/declare";
import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";
import { ALIGN } from "../../declare";

const NeonTypographyStyleBase: JSSStyle = {

    small: {
        fontSize: '1rem',
    },
    medium: {
        fontSize: '1.5rem',
    },
    large: {
        fontSize: '2rem',
    },

    dye: {
        color: COLOR.NAVY,
    },
    alignLeft: {
        textAlign: 'left',
    },
    alignCenter: {
        textAlign: 'center',
    },
    alignRight: {
        textAlign: 'right',
    },
    bold: {
        fontWeight: 'bold',
    },
    tag: {
        paddingLeft: '0.6rem',
    },
    sign: {
        borderLeft: `0.4rem solid ${COLOR.NAVY}`,
    },
};

export const NeonTypographyStyle: NeonStyle = NeonStyle.create(NeonTypographyStyleBase, 'Title');

export const getAlignClass = (style: Classes, align: ALIGN): string => {

    switch (align) {
        case ALIGN.CENTER: return style.alignCenter;
        case ALIGN.RIGHT: return style.alignRight;
        case ALIGN.LEFT:
        default: return style.alignLeft;
    }
};
