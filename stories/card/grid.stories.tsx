/**
 * @author WMXPY
 * @namespace Stories_Card
 * @description Grid
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonCard } from "../../src/card";
import { NeonCardBase } from "../../src/card/card";
import { wInfo } from "../util";
import "./grid.css";
import GridMDX from "./grid.mdx";

const componentStories = storiesOf('Scenarios', module);

componentStories.add(
    'Card Grid',
    wInfo([NeonCardBase], [NeonCard, GridMDX])(() => {

        const label: string = text('Label', 'Label');

        return (<GridMDX label={label} />);
    }),
);

