/**
 * @author WMXPY
 * @namespace Stories_Swing
 * @description Switch
 */

import { boolean, text } from "@storybook/addon-knobs";
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
        const toggled: boolean = boolean('Toggled', false);

        const active: string = text('Active', 'ON');
        const inactive: string = text('Inactive', 'OFF');

        return (<SwitchMDX
            active={active}
            inactive={inactive}
            name={name}
            toggled={toggled}
        />);
    }),
);
