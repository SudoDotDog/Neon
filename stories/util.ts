/**
 * @author WMXPY
 * @namespace Stories
 * @description Util
 */

import { withInfo } from "@storybook/addon-info";

const Actions: any = require("@storybook/addon-actions");

export const wInfo = (includes: any[] = [], excludes: any[] = [], markdown: string = '') =>
    withInfo({
        inline: true,
        source: false,
        styles: {
            infoBody: {
                lineHeight: "1.5",
            },
        },
        text: markdown,
        propTables: includes,
        propTablesExclude: excludes,
    });

export const createAction = () => Actions.actions({
    onClick: 'Click',
    onChange: 'Change',
});
