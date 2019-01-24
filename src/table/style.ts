/**
 * @author WMXPY
 * @namespace Neon_Table
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../#common/declare";
import { getBorder, getBorderStyle, JSSStyle } from "../#common/style";

const NeonTableStyleBase: JSSStyle = {

    table: {

        width: '100%',

        borderCollapse: 'collapse',

        ...getBorderStyle(),

        '& th': {

            cursor: 'default',
            padding: '0.5rem',
            backgroundColor: COLOR.NAVY,
            color: COLOR.WHITE,
        },

        '& td': {

            padding: '0.2rem',
            ...getBorder(COLOR.NAVY, '0.1rem'),
        },
    },
};

export const NeonTableStyleSheet: StyleSheet = jss.createStyleSheet(NeonTableStyleBase).attach();
export const NeonTableStyle: Classes = NeonTableStyleSheet.classes;
