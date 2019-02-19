/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../#common/declare";
import { JSSStyle } from "../#common/style";

const NeonNavigationStyleBase: JSSStyle = {

    box: {
        display: 'flex',
    },
    button: {
        border: 0,
        borderBottom: `0.3rem solid ${COLOR.TRANSPARENT}`,
        borderTop: `0.3rem solid ${COLOR.TRANSPARENT}`,
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
        borderLeft: `0.5rem solid ${COLOR.NAVY}`,
        fontWeight: 'bold',
        '&:hover': {
            borderLeft: `0.6rem solid ${COLOR.NAVY}`,
        },
    },
};

export const NeonNavigationStyleSheet: StyleSheet = jss.createStyleSheet(NeonNavigationStyleBase).attach();
export const NeonNavigationStyle: Classes = NeonNavigationStyleSheet.classes;
