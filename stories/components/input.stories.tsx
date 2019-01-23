/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Input
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonInput } from "../../src/input";
import { NeonInputBase } from "../../src/input/input";
import { createAction, wInfo } from "../util";

const events = createAction();
const { action } = require("@storybook/addon-actions");

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonInput',
    wInfo([NeonInputBase], [NeonInput])(() => {

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

            Enter
            <NeonInput
                {...events}
                onEnter={action('Enter')}
                label={label}
            />
        </div>);
    }),
);

