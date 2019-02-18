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
        borderBottom: `0.2rem solid ${COLOR.TRANSPARENT}`,
        '&:hover': {
            borderBottom: `0.2rem solid ${COLOR.ORANGE}`,
        },
        '&.selected': {
            borderBottom: `0.2rem solid ${COLOR.LIME}`,
        },
    },
};

export const NeonNavigationStyleSheet: StyleSheet = jss.createStyleSheet(NeonNavigationStyleBase).attach();
export const NeonNavigationStyle: Classes = NeonNavigationStyleSheet.classes;
