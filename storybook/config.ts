/**
 * @author WMXPY
 * @namespace Storybook
 * @description Config
 */

import { configure } from "@storybook/react";
const req: __WebpackModuleApi.RequireContext = require.context('../src/stories', true, /\.stories\.tsx$/);

const loadStories = () => {

    req.keys().forEach((filename: string) => req(filename));
    return;
};

configure(loadStories, module);
