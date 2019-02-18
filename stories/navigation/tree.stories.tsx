/**
 * @author WMXPY
 * @namespace Stories_Navigation
 * @description Navigation
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonTree } from "../../src/navigation";
import { createAction, wInfo } from "../util";
import TreeMDX from "./tree.mdx";

const componentStories = storiesOf('Navigation', module);
const events = createAction();

componentStories.add(
    'Tree',
    wInfo([NeonTree], [TreeMDX])(() => {

        const selected: string = text('Selected', 'First');

        return (<TreeMDX selected={selected} events={events} />);
    }),
);
