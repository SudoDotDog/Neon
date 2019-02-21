/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../#common/declare";
import { JSSStyle } from "../#common/style/decorator";

const NeonNavigationStyleBase: JSSStyle = {

    box: {
        display: 'flex',
    },
    button: {
        borderLeft: 0,
        borderRight: 0,
        borderTop: `0.3rem solid ${COLOR.TRANSPARENT}`,
        borderBottom: `0.3rem solid ${COLOR.TRANSPARENT}`,
        boxSizing: 'border-box',

        '&:hover': {
            borderTop: `0.3rem solid ${COLOR.TRANSPARENT}`,
            borderBottom: `0.3rem solid ${COLOR.ORANGE}`,
        },
        '&:focus': {
            borderTop: `0.3rem solid ${COLOR.TRANSPARENT}`,
            borderBottom: `0.3rem solid ${COLOR.BLUE}`,
        },
        '&.selected': {
            borderTop: `0.3rem solid ${COLOR.TRANSPARENT}`,
            borderBottom: `0.3rem solid ${COLOR.LIME}`,
        },
    },

    treeSelected: {
        borderLeftWidth: '0.5rem',
        fontWeight: 'bold',

        '&:hover': {
            borderLeftWidth: '0.6rem',
        },
    },
};

export const NeonNavigationStyleSheet: StyleSheet = jss.createStyleSheet(NeonNavigationStyleBase).attach();
export const NeonNavigationStyle: Classes = NeonNavigationStyleSheet.classes;
