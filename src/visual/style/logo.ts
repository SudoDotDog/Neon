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
        color: COLOR.WHITE,
    },
    sub: {
        color: COLOR.NAVY,
        border: `5px solid ${COLOR.NAVY}`,
    },
    flexEnd: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        boxSizing: 'border-box',
    },
    innerTitle: {
        paddingBottom: '0.4rem',
        paddingRight: '0.1rem',
        paddingLeft: '1rem',
    },
    innerSub: {
        padding: '0.3rem',
    },

    normal: {
        height: '4rem',
    },
    normalTitle: {
        fontSize: '1.5rem',
    },
    normalSub: {
        fontSize: '1.2rem',
    },
    medium: {
        height: '5rem',
    },
    mediumTitle: {
        fontSize: '2rem',
    },
    mediumSub: {
        fontSize: '1.5rem',
    },
    large: {
        height: '6rem',
    },
    largeTitle: {
        fontSize: '2.3rem',
    },
    largeSub: {
        fontSize: '1.8rem',
    },
    full: {
        height: '7rem',
    },
    fullTitle: {
        fontSize: '3rem',
    },
    fullSub: {
        fontSize: '2.5rem',
    },
};

export const NeonLogoStyle: NeonStyle = NeonStyle.create(NeonLogoStyleBase, 'Logo');
