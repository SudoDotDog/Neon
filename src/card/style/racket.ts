/**
 * @author WMXPY
 * @namespace Neon_Card_Style
 * @description Racket
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const height: Record<string, number> = {
    normal: 4,
    medium: 5,
    large: 6,
    full: 7,
};

const NeonRacketStyleBase: JSSStyle = {

    box: {
        width: '100%',
    },

    button: {
        padding: 0,
        display: 'flex',
        alignItems: 'center',
    },
    left: {
        flex: 1,
    },
    leftNormal: {
        height: height.normal - 0.4 + 'rem',
    },
    leftMedium: {
        height: height.medium - 0.4 + 'rem',
    },
    leftLarge: {
        height: height.large - 0.4 + 'rem',
    },
    leftFull: {
        height: height.full - 0.4 + 'rem',
    },
    leftRelative: {
        height: '100%',
    },

    image: {
        height: '100%',
    },

    normal: {
        height: height.normal + 'rem',
    },
    medium: {
        height: height.medium + 'rem',
    },
    large: {
        height: height.large + 'rem',
    },
    full: {
        height: height.full + 'rem',
    },
    relative: {
        height: 'inherit',
    },
};

export const NeonRacketStyle: NeonStyle = NeonStyle.create(NeonRacketStyleBase, 'Racket');
