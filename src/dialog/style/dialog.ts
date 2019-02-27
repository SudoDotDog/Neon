/**
 * @author WMXPY
 * @namespace Neon_Dialog_Style
 * @description Dialog
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonDialogStyleBase: JSSStyle = {

    box: {
        width: '100vw',
        height: '100vh',

        maxWidth: '37rem',
        maxHeight: '17rem',

        padding: '0.4rem',
        backgroundColor: COLOR.WHITE,
        boxShadow: '3px 3px 5px -1px rgba(0, 30, 60, 0.3)',
        ...getBorderStyle('0.4rem'),
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
    },
    area: {
        display: 'flex',
    },
    topButton: {
        width: '2rem',
    },
    content: {
        flex: 1,
        overflow: 'auto',
    },
    tinyMargin: {
        marginTop: '0.2rem',
    },

    fixed: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    grayOut: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        userSelect: 'none',
        zIndex: 9,
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        zIndex: 10,
    },

    traverse: {
        transition: 'opacity 0.3s',
    },
    visible: {
        opacity: 1,
    },
    invisible: {
        opacity: 0,
    },
};

export const NeonDialogStyle: NeonStyle = NeonStyle.create(NeonDialogStyleBase);
