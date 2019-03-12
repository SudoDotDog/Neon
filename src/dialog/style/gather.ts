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
    },
    gather: {
        gridTemplateRows: '1fr auto auto',
    },
    command: {
        gridTemplateRows: 'auto 1fr auto',
    },
    title: {
        boxSizing: 'border-box',
        gridArea: 'title',
    },
    content: {
        boxSizing: 'border-box',
        gridArea: 'content',
    },
    input: {
        boxSizing: 'border-box',
        gridArea: 'input',
        width: 'inherit',
    },
    action: {
        boxSizing: 'border-box',
        gridArea: 'action',
    },
};

export const NeonGatherStyle: NeonStyle = NeonStyle.create(NeonGatherStyleBase, 'Gather');
