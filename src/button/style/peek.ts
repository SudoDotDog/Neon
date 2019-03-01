/**
 * @author WMXPY
 * @namespace Neon_Button_Style
 * @description Peek
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

export const NeonPeekStyleBase: JSSStyle = {

    peek: {
        transition: 'all 0.2s',
        whiteSpace: 'nowrap',
    },
    sizeNormal: {
        width: 'auto !important',
        minWidth: '3rem',
        maxWidth: '3rem',
        '&:hover': {
            maxWidth: '15rem',
        },
    },
    sizeMedium: {
        width: 'auto !important',
        minWidth: '4rem',
        maxWidth: '4rem',
        '&:hover': {
            maxWidth: '20rem',
        },
    },
    sizeLarge: {
        width: 'auto !important',
        minWidth: '5rem',
        maxWidth: '5rem',
        '&:hover': {
            maxWidth: '25rem',
        },
    },
    sizeFull: {
        width: 'auto !important',
        minWidth: '6rem',
        maxWidth: '6rem',
        '&:hover': {
            maxWidth: '30rem',
        },
    },
};

export const NeonPeekStyle: NeonStyle = NeonStyle.create(NeonPeekStyleBase, 'Peek');
