/**
 * @author WMXPY
 * @namespace Stories
 * @description Util
 */

import { withInfo } from "@storybook/addon-info";

const Actions: any = require("@storybook/addon-actions");

export const wInfo = (markdown: string) =>
    withInfo({
        inline: true,
        source: false,
        styles: {
            infoBody: {
                lineHeight: "1.5",
            },
        },
        text: markdown,
    });

export const createAction = () => Actions.actions({
    onClick: 'clicked',
    onChange: 'changed',
});
