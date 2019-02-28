/**
 * @author WMXPY
 * @namespace Neon_Input_Style
 * @description Text
 */

import { COLOR } from "../../#common/declare";
import { getBorderStyle, JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonTextStyleBase: JSSStyle = {

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

export const NeonTextStyle: NeonStyle = NeonStyle.create(NeonTextStyleBase, 'Text');
