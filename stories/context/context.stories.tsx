/**
 * @author WMXPY
 * @namespace Stories_Menu
 * @description Context Menu
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonContextMenu } from "../../src/context";
import { NeonContextMenuBase } from "../../src/context/context";
import { wInfo } from "../util";
import ContextMenuMDX from "./context.mdx";

const componentStories = storiesOf('Context', module);

componentStories.add(
    'Context Menu',
    wInfo([NeonContextMenuBase], [NeonContextMenu, ContextMenuMDX])(() => {

        return (<ContextMenuMDX />);
    }),
);
