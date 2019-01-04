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
        border: '0px solid red',
    },
};
const keyframes = {

    '100%': 'transform: rotate(360deg)',
};

const NeonSpinnerStyleBase: JSSStyle = {

    loading: {
        position: 'relative',
        transition: '0.5s all ease-in-out',
        margin: '1rem',
        width: '3rem',
        height: '3rem',
    },
    disable: {
        border: `0 solid ${COLOR.TRANSPARENT}`,
    },
    enableFront: {
        border: `0.5rem solid ${COLOR.NAVY}`,
    },
    enableBack: {
        border: `0.5rem solid ${COLOR.LIME}`,
    },
    outer: {
        transition: '0.5s all ease-in-out',
        position: 'absolute',
    },
    front: {
        zIndex: 1,
        ...commonFrontBackStyle,
    },
    back: {
        ...commonFrontBackStyle,
    },
    spinningFront: {
        animation: 'neon-loading-rotate 3s infinite',
    },
    spinningBack: {
        animation: 'neon-loading-rotate 1.5s infinite',
    },
    '@global': {
        '@keyframes neon-loading-rotate': keyframes,
    },
};

export const NeonSpinnerStyleSheet: StyleSheet = jss.createStyleSheet(NeonSpinnerStyleBase).attach();
export const NeonSpinnerStyle: Classes = NeonSpinnerStyleSheet.classes;
