/**
 * @author WMXPY
 * @namespace Neon_Paper
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../#common/declare";
import { getBorder, JSSStyle } from "../#common/style/decorator";

const NeonPaperStyleBase: JSSStyle = {

    wrap: {

        padding: '1rem',
        boxShadow: '3px 3px 5px -2px rgba(0, 30, 60, 0.3)',
        backgroundColor: COLOR.WHITE,

        ...getBorder(COLOR.GRAY, '1px'),
    },
};

export const NeonPaperStyleSheet: StyleSheet = jss.createStyleSheet(NeonPaperStyleBase).attach();
export const NeonPaperStyle: Classes = NeonPaperStyleSheet.classes;
