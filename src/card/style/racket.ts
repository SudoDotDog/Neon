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

const LEFT_MERGE = 0.4;

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
        height: `${height.normal - LEFT_MERGE}rem`,
    },
    leftMedium: {
        height: `${height.medium - LEFT_MERGE}rem`,
    },
    leftLarge: {
        height: `${height.large - LEFT_MERGE}rem`,
    },
    leftFull: {
        height: `${height.full - LEFT_MERGE}rem`,
    },
    leftRelative: {
        height: '100%',
    },

    image: {
        height: '100%',
    },

    normal: {
        height: `${height.normal}rem`,
    },
    medium: {
        height: `${height.medium}rem`,
    },
    large: {
        height: `${height.large}rem`,
    },
    full: {
        height: `${height.full}rem`,
    },
    relative: {
        height: 'inherit',
    },
};

export const NeonRacketStyle: NeonStyle = NeonStyle.create(NeonRacketStyleBase, 'Racket');
