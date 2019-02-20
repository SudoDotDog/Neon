/**
 * @author WMXPY
 * @namespace Storybook
 * @description Config
 */

import { withKnobs } from "@storybook/addon-knobs/react";
import { addDecorator, configure } from "@storybook/react";

addDecorator(withKnobs);

const req: __WebpackModuleApi.RequireContext = require.context('../stories', true, /\.stories\.tsx$/);

const loadStories = () => {

    req.keys().forEach((filename: string) => req(filename));
    return;
};

configure(loadStories, module);
