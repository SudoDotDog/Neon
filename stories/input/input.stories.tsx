/**
 * @author WMXPY
 * @namespace Stories_Input
 * @description Input
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonInput } from "../../src/input";
import { NeonInputBase } from "../../src/input/input";
import { createAction, wInfo } from "../util";
import InputMDX from "./input.mdx";

const componentStories = storiesOf('Input', module);
const events = createAction();

componentStories.add(
    'Input',
    wInfo([NeonInputBase], [NeonInput, InputMDX])(() => {

        const label: string = text('Label', 'Label');
        const value: string = text('Value', 'Value');

        return (<InputMDX label={label} value={value} events={events} />);
    }),
);
