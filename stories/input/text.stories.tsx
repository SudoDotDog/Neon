/**
 * @author WMXPY
 * @namespace Stories_Input
 * @description Text
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonInput } from "../../src/input";
import { NeonInputBase } from "../../src/input/input";
import { createAction, wInfo } from "../util";
import TextMDX from "./text.mdx";

const componentStories = storiesOf('Input', module);
const events = createAction();

componentStories.add(
    'Text',
    wInfo([NeonInputBase], [NeonInput, TextMDX])(() => {

        const label: string = text('Label', 'Label');
        const value: string = text('Value', 'Value');

        return (<TextMDX label={label} value={value} events={events} />);
    }),
);
