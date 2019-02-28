/**
 * @author WMXPY
 * @namespace Neon_Flag_Style
 * @description Sticker
 */

import { COLOR } from "../../#common/declare";
import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonStickerStyleBase: JSSStyle = {

    box: {
        border: `0.4rem solid ${COLOR.NAVY}`,
        padding: '0.2rem',
        boxSizing: 'border-box',
        position: 'relative',

        height: 'inherit',
        width: 'inherit',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        overflow: 'hidden',
    },
    peek: {
        position: 'absolute',
    },
    error: {
        color: COLOR.RED,
    },
    warning: {
        color: COLOR.ORANGE,
    },
    succeed: {
        color: COLOR.GREEN,
    },
    plain: {
        color: COLOR.NAVY,
    },
    title: {
        fontSize: '3.8rem',
        fontWeight: 'bold',
    },
    holder: {
        textAlign: 'center',
        fontSize: '1.2rem',
        wordBreak: 'break-word',
        flex: 1,
    },
};

export const NeonStickerStyle: NeonStyle = NeonStyle.create(NeonStickerStyleBase, 'Sticker');
