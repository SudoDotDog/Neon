/**
 * @author WMXPY
 * @namespace Neon_Spinner_Style
 * @description Spinner
 */

import { COLOR } from "../../#common/declare";
import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

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

export const NeonSpinnerStyle: NeonStyle = NeonStyle.create(NeonSpinnerStyleBase, 'Spinner');
