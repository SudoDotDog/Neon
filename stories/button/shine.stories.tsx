/**
 * @author WMXPY
 * @namespace Stories_Button
 * @description Shine
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonShine } from "../../src/button";
import { NeonShineBase } from "../../src/button/shine";
import { createAction, wInfo } from "../util";
import ShineMDX from "./shine.mdx";

const componentStories = storiesOf('Button', module);
const events = createAction();

componentStories.add(
    'Shine',
    wInfo([NeonShineBase], [NeonShine, ShineMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<ShineMDX name={name} events={events} />);
    }),
);
