/**
 * @author WMXPY
 * @namespace Neon_Spinner_Style
 * @description Indicator
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonIndicatorStyleBase: JSSStyle = {

    box: {
        position: 'relative',
    },
    wrap: {
        transition: '0.3s all ease-in-out',
    },
    cover: {
        position: 'absolute',
        top: 0,
        left: 0,

        width: '100%',
        height: '100%',

        transition: '0.3s all ease-in-out',
    },
    spinner: {
        position: 'absolute',
        display: 'flex',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: '100%',

        pointerEvents: 'none',
    },
    invisible: {
        visibility: 'hidden',
        opacity: 0,

        pointerEvents: 'none',
    },
    visible: {
        visibility: 'visible',
        opacity: 1,

        pointerEvents: 'auto',
    },
};

export const NeonIndicatorStyle: NeonStyle = NeonStyle.create(NeonIndicatorStyleBase, 'Indicator');
