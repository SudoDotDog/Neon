/**
 * @author WMXPY
 * @namespace Stories_Menu
 * @description Context Menu
 */

import { storiesOf } from "@storybook/react";
import { NeonContextMenu, NeonContextMenuBase } from "menu/context";
import * as React from "react";
import { wInfo } from "../util";
import ContextMenuMDX from "./context.mdx";

const componentStories = storiesOf('Menu', module);

componentStories.add(
    'Context Menu',
    wInfo([NeonContextMenuBase], [NeonContextMenu, ContextMenuMDX])(() => {

        return (<ContextMenuMDX />);
    }),
);
