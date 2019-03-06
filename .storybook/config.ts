/**
 * @author WMXPY
 * @namespace Storybook
 * @description Config
 */

import { withKnobs } from "@storybook/addon-knobs/react";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { create } from "@storybook/theming";

addDecorator(withKnobs);
addParameters({
    options: {
        theme: create({
            base: 'light',
            brandTitle: 'Neon',
            brandUrl: 'https://github.com/sudodotdog/neon',
        }),
        isFullscreen: false,
    },
});

const req: __WebpackModuleApi.RequireContext = require.context('../stories', true, /\.stories\.tsx$/);

const loadStories = () => {

    req.keys().forEach((filename: string) => req(filename));
    return;
};

configure(loadStories, module);
