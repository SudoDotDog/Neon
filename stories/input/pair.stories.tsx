/**
 * @author WMXPY
 * @namespace Stories_Input
 * @description Pair
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonPair } from "../../src/input";
import { NeonPairBase } from "../../src/input/pair";
import { createAction, wInfo } from "../util";
import PairMDX from "./pair.mdx";

const componentStories = storiesOf('Input', module);
const events = createAction();

componentStories.add(
    'Pair',
    wInfo([NeonPairBase], [NeonPair, PairMDX])(() => {

        const label: string = text('Label', 'Label');
        const value: string = text('Value', 'Value');

        return (<PairMDX label={label} value={value} events={events} />);
    }),
);
