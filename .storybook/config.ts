/**
 * @author WMXPY
 * @namespace Storybook
 * @description Config
 */

import { withKnobs } from "@storybook/addon-knobs/react";
import { addDecorator, configure, setAddon } from "@storybook/react";

const JSXAddon = require("storybook-addon-jsx");

addDecorator(withKnobs);
setAddon(JSXAddon);

const req: __WebpackModuleApi.RequireContext = require.context('../stories', true, /\.stories\.tsx$/);

const loadStories = () => {

    req.keys().forEach((filename: string) => req(filename));
    return;
};

configure(loadStories, module);
