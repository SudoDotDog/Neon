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
            'content content'
            'input input'
            'empty action'
        `,
        gridTemplateColumns: '1fr auto',
        gridTemplateRows: '1fr auto auto',
    },
    title: {
        gridArea: 'title',
    },
    content: {
        gridArea: 'content',
    },
    input: {
        gridArea: 'input',
        width: 'inherit',
    },
    action: {
        gridArea: 'action',
    },
};

export const NeonGatherStyle: NeonStyle = NeonStyle.create(NeonGatherStyleBase);
