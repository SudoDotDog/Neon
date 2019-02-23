/**
 * @author WMXPY
 * @namespace Stories_Form
 * @description Poll
 */

import { object, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN } from "../../src/declare";
import { INPUT_TYPE, NeonSmartForm } from "../../src/form";
import { wInfo } from "../util";
import PollMDX from "./poll.mdx";

const componentStories = storiesOf('Form', module);

componentStories.add(
    'Smart Poll',
    wInfo([NeonSmartForm], [PollMDX])(() => {

        const structure: Record<string, INPUT_TYPE> = object('Structure', {
            hello: INPUT_TYPE.TEXT,
            number: INPUT_TYPE.NUMBER,
            world: INPUT_TYPE.PASSWORD,
        });

        const value: Record<string, any> = object('Value', {
            hello: 'Hello',
            number: 123,
        });

        const rift: string = text('rift', MARGIN.SMALL);

        return (<PollMDX
            rift={rift}
            structure={structure}
            value={value}
        />);
    }),
);

