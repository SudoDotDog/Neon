/**
 * @author WMXPY
 * @namespace Neon_Typography
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../#common/declare";
import { JSSStyle } from "../#common/style";
import { ALIGN } from "../declare";

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
        borderLeft: `0.4rem solid ${COLOR.NAVY}`,
    },
};

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

export const NeonTypographyStyleSheet: StyleSheet = jss.createStyleSheet(NeonTypographyStyleBase).attach();
export const NeonTypographyStyle: Classes = NeonTypographyStyleSheet.classes;

export const NeonTypographySubStyleSheet: StyleSheet = jss.createStyleSheet(NeonTypographySubStyleBase).attach();
export const NeonTypographySubStyle: Classes = NeonTypographySubStyleSheet.classes;

export const getAlignClass = (align: ALIGN): string => {

    switch (align) {
        case ALIGN.CENTER: return NeonTypographyStyle.alignCenter;
        case ALIGN.RIGHT: return NeonTypographyStyle.alignRight;
        case ALIGN.LEFT:
        default: return NeonTypographyStyle.alignLeft;
    }
};
