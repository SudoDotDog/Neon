/**
 * @author WMXPY
 * @namespace Stories_Pill
 * @description Pill
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonPill } from "../../src/pill";
import { NeonPillBase } from "../../src/pill/pill";
import { wInfo } from "../util";
import PillMDX from "./pill.mdx";

const componentStories = storiesOf('Pill', module);

componentStories.add(
    'Pill',
    wInfo([NeonPillBase], [NeonPill, PillMDX])(() => {

        const info: string = text('Info', 'info');

        return (<PillMDX info={info} />);
    }),
);
