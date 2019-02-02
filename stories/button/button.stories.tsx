/**
 * @author WMXPY
 * @namespace Stories_Button
 * @description Button
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { NeonButtonBase } from "../../src/button/button";
import { createAction, wInfo } from "../util";
import ButtonMDX from "./button.mdx";

const componentStories = storiesOf('Components', module);
const events = createAction();

componentStories.add(
    'Button',
    wInfo([NeonButtonBase], [NeonButton, ButtonMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<ButtonMDX name={name} events={events} />);
    }),
);
