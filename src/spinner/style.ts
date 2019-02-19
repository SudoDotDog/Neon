/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Style
 */

import { COLOR } from "../#common/declare";
import { JSSStyle } from "../#common/style/decorator";
import { NeonStyle } from "../#common/style/style";

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
        margin: '1.5rem',
        width: '3rem',
        height: '3rem',
    },
    disable: {
        outline: `0.8rem solid ${COLOR.TRANSPARENT}`,
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

const NeonIndicatorStyleBase: JSSStyle = {

    box: {
        position: 'relative',
    },
    wrap: {
        transition: '0.3s all ease-in-out',
    },
    cover: {
        position: 'absolute',
        top: 0,
        left: 0,

        width: '100%',
        height: '100%',

        transition: '0.3s all ease-in-out',
    },
    spinner: {
        position: 'absolute',
        display: 'flex',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: '100%',

        pointerEvents: 'none',
    },
    invisible: {
        visibility: 'hidden',
        opacity: 0,

        pointerEvents: 'none',
    },
    visible: {
        visibility: 'visible',
        opacity: 1,

        pointerEvents: 'auto',
    },
};

export const NeonSpinnerStyle: NeonStyle = NeonStyle.create(NeonSpinnerStyleBase);
export const NeonIndicatorStyle: NeonStyle = NeonStyle.create(NeonIndicatorStyleBase);
