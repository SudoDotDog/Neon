/**
 * @author WMXPY
 * @namespace Stories_Swing
 * @description Button Group
 */

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

        return (<ButtonGroupMDX />);
    }),
);
