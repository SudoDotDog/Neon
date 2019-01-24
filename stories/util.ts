/**
 * @author WMXPY
 * @namespace Stories
 * @description Util
 */

import { withInfo } from "@storybook/addon-info";

const Actions: any = require("@storybook/addon-actions");

export const wInfo = (includes: any[] = [], excludes: any[] = []) =>
    withInfo({
        inline: false,
        source: false,
        styles: {
            infoBody: {
                lineHeight: "1.5",
            },
        },
        propTables: includes,
        propTablesExclude: excludes,
    });

export const createAction = () => Actions.actions({
    onClick: 'Click',
    onChange: 'Change',
});
