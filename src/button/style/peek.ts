/**
 * @author WMXPY
 * @namespace Neon_Button_Style
 * @description Peek
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

export const NeonPeekStyleBase: JSSStyle = {

    peek: {
        transition: 'max-width 0.2s',
        whiteSpace: 'nowrap',
    },
    sizeNormal: {
        fontSize: '0.8rem',
        minWidth: '3rem',
        maxWidth: '3rem',
        height: '3rem',
        padding: '0.2rem',
        '&:hover': {
            maxWidth: '15rem',
        },
        '&.circle': {
            borderRadius: '3rem',
        },
    },
    sizeMedium: {
        fontSize: '1rem',
        minWidth: '4rem',
        maxWidth: '4rem',
        height: '4rem',
        padding: '0.4rem',
        '&:hover': {
            maxWidth: '20rem',
        },
        '&.circle': {
            borderRadius: '4rem',
        },
    },
    sizeLarge: {
        fontSize: '1.2rem',
        minWidth: '5rem',
        maxWidth: '5rem',
        height: '5rem',
        padding: '0.6rem',
        '&:hover': {
            maxWidth: '25rem',
        },
        '&.circle': {
            borderRadius: '5rem',
        },
    },
    sizeFull: {
        fontSize: '1.4rem',
        minWidth: '6rem',
        maxWidth: '6rem',
        height: '6rem',
        padding: '0.8rem',
        '&:hover': {
            maxWidth: '30rem',
        },
        '&.circle': {
            borderRadius: '6rem',
        },
    },
};

export const NeonPeekStyle: NeonStyle = NeonStyle.create(NeonPeekStyleBase);
