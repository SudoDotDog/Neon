/**
 * @author WMXPY
 * @namespace Neon_Input_Style
 * @description Password
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonPasswordStyleBase: JSSStyle = {

    text: {

        padding: '0.2rem',
        cursor: 'text',
        backgroundColor: COLOR.WHITE,

        ...getBorderStyle(),
    },
    borderLite: {

        borderWidth: 0,
        borderBottomWidth: '0.2rem',
    },
    textInput: {

        border: '0',
        paddingTop: '0.3rem',

        fontSize: '1rem',
        outline: '0',

        width: '100%',
        height: '1.4rem',

        '&:focus': {
            color: COLOR.DARKGRAY,
        },
    },
};

export const NeonPasswordStyle: NeonStyle = NeonStyle.create(NeonPasswordStyleBase, 'Text');
