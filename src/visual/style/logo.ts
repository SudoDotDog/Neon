/**
 * @author WMXPY
 * @namespace Neon_Visual_Style
 * @description Logo
 */

import { COLOR } from "../../#common/declare";
import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonLogoStyleBase: JSSStyle = {

    wrap: {
        display: 'flex',
    },
    title: {
        backgroundColor: COLOR.NAVY,
        boxSizing: 'border-box',
        color: COLOR.WHITE,
    },
    sub: {
        color: COLOR.NAVY,
        position: 'relative',
        border: `5px solid ${COLOR.NAVY}`,
        boxSizing: 'border-box',
        textAlign: 'justify',
    },
    placeholder: {
        visibility: 'hidden',
        padding: '0.3rem',
    },
    alignBottom: {
        position: 'absolute',
        padding: '0.3rem',
        right: 0,
        bottom: 0,
    },
    paddingMore: {
        paddingBottom: '0.6rem',
    },
};

export const NeonLogoStyle: NeonStyle = NeonStyle.create(NeonLogoStyleBase, 'Logo');
