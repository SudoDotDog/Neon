/**
 * @author WMXPY
 * @namespace Stories_Dash
 * @description Dash
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonDash } from "../../src/dash";
import { NeonDashBase } from "../../src/dash/dash";
import { createAction, wInfo } from "../util";
import DashMDX from "./dash.mdx";

const componentStories = storiesOf('Dash', module);
const events = createAction();

componentStories.add(
    'Dash',
    wInfo([NeonDashBase], [NeonDash, DashMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<DashMDX name={name} events={events} />);
    }),
);
