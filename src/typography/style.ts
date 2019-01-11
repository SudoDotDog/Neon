/**
 * @author WMXPY
 * @namespace Neon_Typography
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../common/declare";
import { JSSStyle } from "../common/style";

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
