/**
 * @author WMXPY
 * @namespace Neon_Card_Style
 * @description Card
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonCardStyleBase: JSSStyle = {

    wrap: {
        display: 'flex',
        flexDirection: 'column',

        padding: '0.5rem',
        boxShadow: '2px 2px 3px -1px rgba(0, 30, 60, 0.3)',
        backgroundColor: COLOR.WHITE,

        ...getBorderStyle('0.1rem'),
    },

    relativeSize: {
        height: 'auto',
        width: 'auto',
    },
    fullSize: {
        boxSizing: 'border-box',
        height: 'inherit',
        width: 'inherit',
    },
    normalSize: {
        width: '10rem',
        height: '13rem',
    },
    mediumSize: {
        width: '15rem',
        height: '19rem',
    },
    largeSize: {
        width: '20rem',
        height: '25rem',
    },

    fullWidth: {
        width: '100%',
    },
};

export const NeonCardStyle: NeonStyle = NeonStyle.create(NeonCardStyleBase);
