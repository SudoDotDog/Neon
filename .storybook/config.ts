/**
 * @author WMXPY
 * @namespace Storybook
 * @description Config
 */

import { withKnobs } from "@storybook/addon-knobs/react";
import { withOptions } from '@storybook/addon-options';
import { addDecorator, configure } from "@storybook/react";

addDecorator(withKnobs);
addDecorator(
    withOptions({
        name: 'Neon',
        url: 'https://github.com/sudodotdog/neon',
        goFullScreen: false,
        showStoriesPanel: true,
        showAddonPanel: true,
        addonPanelInRight: false,
        sortStoriesByKind: false,
        sidebarAnimations: true,
        selectedAddonPanel: undefined,
        enableShortcuts: true,
    }),
);
const req: __WebpackModuleApi.RequireContext = require.context('../stories', true, /\.stories\.tsx$/);

const loadStories = () => {

    req.keys().forEach((filename: string) => req(filename));
    return;
};

configure(loadStories, module);
