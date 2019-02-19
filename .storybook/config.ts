/**
 * @author WMXPY
 * @namespace Storybook
 * @description Config
 */

import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from "@storybook/addon-knobs/react";
import { addDecorator, configure } from "@storybook/react";

addDecorator(withKnobs);
addDecorator(checkA11y);

const req: __WebpackModuleApi.RequireContext = require.context('../stories', true, /\.stories\.tsx$/);

const loadStories = () => {

    req.keys().forEach((filename: string) => req(filename));
    return;
};

configure(loadStories, module);
