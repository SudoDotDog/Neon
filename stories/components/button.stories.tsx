/**
 * @author WMXPY
 * @namespace Stories
 * @description Components
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { createAction, wInfo } from "../util";
import * as ButtonMD from "./button.md";

const events = createAction();

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonButton',
    wInfo(ButtonMD)(() => {

        const name: string = text('Name', 'Name');

        return (<NeonButton {...events}>
            {name}
        </NeonButton>);
    }),
);
