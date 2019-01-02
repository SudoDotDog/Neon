/**
 * @author WMXPY
 * @namespace Stories
 * @description Components
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { NeonInput } from "input/input";
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

componentStories.add(
    'NeonInput',
    wInfo('')(() => {

        const label: string = text('Label', 'Label');
        const value: string = text('Value', 'Value');

        return (<div>
            WithValue
            <NeonInput
                {...events}
                value={value}
                label={label}
            />
            Empty
            <NeonInput
                {...events}
                label={label}
            />
        </div>);
    }),
);

