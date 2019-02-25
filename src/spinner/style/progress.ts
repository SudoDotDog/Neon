/**
 * @author WMXPY
 * @namespace Neon_Spinner_Style
 * @description Progress
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonProgressStyleBase: JSSStyle = {

    wrap: {

        display: 'flex',
        ...getBorderStyle(),
    },
    reverse: {
        flex: 1,
        backgroundColor: COLOR.TRANSPARENT,
        alignItems: 'center',
        display: 'flex',
        height: '100%',
    },
    bar: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'flex-end',
    },
    percentage: {
        alignSelf: 'right',
        fontWeight: 'bold',
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },

    normal: {
        height: '2rem',
        fontSize: '1rem',
    },
    medium: {
        height: '3rem',
        fontSize: '1.2rem',
    },
    large: {
        height: '4rem',
        fontSize: '1.4rem',
    },
    full: {
        height: '5rem',
        fontSize: '1.6rem',
    },
    relative: {
        height: '100%',
    },
};

export const NeonProgressStyle: NeonStyle = NeonStyle.create(NeonProgressStyleBase);
