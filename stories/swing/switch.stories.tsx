/**
 * @author WMXPY
 * @namespace Stories_Swing
 * @description Switch
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonSwitch } from "../../src/swing";
import { NeonSwitchBase } from "../../src/swing/switch";
import { wInfo } from "../util";
import SwitchMDX from "./switch.mdx";

const componentStories = storiesOf('Swing', module);

componentStories.add(
    'Switch',
    wInfo([NeonSwitchBase], [NeonSwitch, SwitchMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<SwitchMDX name={name} />);
    }),
);
