/**
 * @author WMXPY
 * @namespace Neon_Pill
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../#common/declare";
import { getBorder, JSSStyle } from "../#common/style";

const NeonPillStyleBase: JSSStyle = {

    wrap: {
        display: 'inline-flex',
        alignItems: 'center',
        height: '1.5rem',
        ...getBorder(COLOR.NAVY, '0.1rem'),
    },
    info: {
        paddingLeft: '0.3rem',
        paddingRight: '0.3rem',
        flex: 1,
    },
    remove: {
        width: '1.5rem',
    },
};

export const NeonPillStyleSheet: StyleSheet = jss.createStyleSheet(NeonPillStyleBase).attach();
export const NeonPillStyle: Classes = NeonPillStyleSheet.classes;
