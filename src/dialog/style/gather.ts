/**
 * @author WMXPY
 * @namespace Neon_Dialog_Style
 * @description Gather
 */

import { JSSStyle } from "../../#common/style/decorator";
import { NeonStyle } from "../../#common/style/style";

const NeonGatherStyleBase: JSSStyle = {

    grid: {
        height: '100%',
        display: 'grid',
        gridTemplateAreas: `
            'title title'
            'content content'
            'input input'
            'empty action'
        `,
        gridTemplateColumns: '1fr auto',
        gridTemplateRows: 'auto 1fr auto auto',
    },
    title: {
        gridArea: 'title',
    },
    content: {
        gridArea: 'content',
    },
    input: {
        gridArea: 'input',
    },
    action: {
        gridArea: 'action',
    },
};

export const NeonGatherStyle: NeonStyle = NeonStyle.create(NeonGatherStyleBase);
