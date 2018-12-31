/**
 * @author WMXPY
 * @namespace Stories
 * @description Util
 */

import { withInfo } from "@storybook/addon-info";

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
