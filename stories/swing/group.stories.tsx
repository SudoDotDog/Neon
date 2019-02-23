/**
 * @author WMXPY
 * @namespace Stories_Swing
 * @description Button Group
 */

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButtonGroup } from "../../src/swing";
import { NeonButtonGroupBase } from "../../src/swing/group";
import { wInfo } from "../util";
import ButtonGroupMDX from "./group.mdx";

const componentStories = storiesOf('Swing', module);

componentStories.add(
    'Button Group',
    wInfo([NeonButtonGroupBase], [NeonButtonGroup, ButtonGroupMDX])(() => {

        const name: string = text('Name', 'Name');
        const toggled: boolean = boolean('Toggled', false);

        const active: string = text('Active', 'ON');
        const inactive: string = text('Inactive', 'OFF');

        return (<ButtonGroupMDX
            active={active}
            inactive={inactive}
            name={name}
            toggled={toggled}
        />);
    }),
);
