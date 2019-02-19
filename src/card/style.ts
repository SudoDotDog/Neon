/**
 * @author WMXPY
 * @namespace Neon_Card
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../#common/declare";
import { getBorderStyle, JSSStyle } from "../#common/style/decorator";

const NeonCardStyleBase: JSSStyle = {

    wrap: {

        display: 'flex',
        flexDirection: 'column',

        padding: '0.5rem',
        boxShadow: '2px 2px 3px -1px rgba(0, 30, 60, 0.3)',
        backgroundColor: COLOR.WHITE,

        ...getBorderStyle('0.1rem'),
    },

    upper: {
        flex: 1,
    },
    lower: {
        minHeight: '30%',
    },

    relativeSize: {
        height: 'auto',
        width: 'auto',
    },
    fullSize: {
        boxSizing: 'border-box',
        height: 'inherit',
        width: 'inherit',
    },
    normalSize: {
        width: '10rem',
        height: '13rem',
    },
    mediumSize: {
        width: '15rem',
        height: '19rem',
    },
    largeSize: {
        width: '20rem',
        height: '25rem',
    },

    fullWidth: {
        width: '100%',
    },
};

export const NeonCardStyleSheet: StyleSheet = jss.createStyleSheet(NeonCardStyleBase).attach();
export const NeonCardStyle: Classes = NeonCardStyleSheet.classes;
