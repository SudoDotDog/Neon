/**
 * @author WMXPY
 * @namespace Stories_Button
 * @description Peek
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonPeek } from "../../src/button";
import { NeonPeekBase } from "../../src/button/peek";
import { createAction, wInfo } from "../util";
import PeekMDX from "./peek.mdx";

const componentStories = storiesOf('Components', module);
const events = createAction();

componentStories.add(
    'Peek',
    wInfo([NeonPeekBase], [NeonPeek, PeekMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<PeekMDX name={name} events={events} />);
    }),
);
