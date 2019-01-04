/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { COLOR } from "../common/declare";
import { JSSStyle } from "../common/style";

const commonFrontBackStyle = {

    transition: '0.8s all ease-in-out',
    pointerEvents: 'none',
    position: 'absolute',
    width: '3rem',
    height: '3rem',
    opacity: 1,

    '&.disable': {
        outline: '0px solid red',
    },
};
const keyframes = {

    '100%': 'transform: rotate(360deg)',
};

const NeonSpinnerStyleBase: JSSStyle = {

    loading: {

        position: 'relative',
        transition: '0.5s all ease-in-out',
        width: '3rem',
        height: '3rem',
    },

    disable: {
        outline: `0 solid ${COLOR.TRANSPARENT}`,
    },

    enableFront: {
        outline: `0.5rem solid ${COLOR.NAVY}`,
    },

    enableBack: {
        outline: `0.5rem solid ${COLOR.LIME}`,
    },

    outer: {

        transition: '0.5s all ease-in-out',
        position: 'absolute',
    },
    front: {

        zIndex: 1,
        ...commonFrontBackStyle,

        animation: 'loading-rotate 3s infinite',
    },
    back: {

        ...commonFrontBackStyle,
        animation: 'loading-rotate 1.5s infinite',
    },

    '@global': {
        '@keyframes loading-rotate': keyframes,
    },
};

export const NeonSpinnerStyleSheet: StyleSheet = jss.createStyleSheet(NeonSpinnerStyleBase).attach();
export const NeonSpinnerStyle: Classes = NeonSpinnerStyleSheet.classes;
