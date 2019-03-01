/**
 * @author WMXPY
 * @namespace Neon_Button_Style
 * @description Coin
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

export const NeonCoinStyleBase: JSSStyle = {

    sizeNormal: {
        fontSize: '0.8rem',
        width: '3rem',
        height: '3rem',
        padding: '0.2rem',
        '&.circle': {
            borderRadius: '3rem',
        },
    },
    sizeMedium: {
        fontSize: '1rem',
        width: '4rem',
        height: '4rem',
        padding: '0.4rem',
        '&.circle': {
            borderRadius: '4rem',
        },
    },
    sizeLarge: {
        fontSize: '1.2rem',
        width: '5rem',
        height: '5rem',
        padding: '0.6rem',
        '&.circle': {
            borderRadius: '5rem',
        },
    },
    sizeFull: {
        fontSize: '1.4rem',
        width: '6rem',
        height: '6rem',
        padding: '0.8rem',
        '&.circle': {
            borderRadius: '6rem',
        },
    },
};

export const NeonCoinStyle: NeonStyle = NeonStyle.create(NeonCoinStyleBase, 'Peek');
