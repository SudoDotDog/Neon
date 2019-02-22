/**
 * @author WMXPY
 * @namespace Neon_Input_Style
 * @description Pair
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonPairStyleBase: JSSStyle = {

    pair: {

        backgroundColor: COLOR.NAVY,
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'system-ui',
    },
    pairLabel: {

        color: COLOR.WHITE,
        fontWeight: 'bold',

        textAlign: 'right',
        paddingTop: '0.2rem',
        paddingRight: '0.6rem',
        paddingLeft: '0.6rem',

        flex: 1,
    },
    pairText: {

        flex: 5,
    },
    pairRaw: {

        flex: 5,
        backgroundColor: COLOR.WHITE,
        color: COLOR.NAVY,

        padding: '0.2rem',
        paddingTop: '0.6rem',
        fontSize: '1rem',
        height: '1.4rem',

        ...getBorderStyle(),
    },
};

export const NeonPairStyle: NeonStyle = NeonStyle.create(NeonPairStyleBase);
