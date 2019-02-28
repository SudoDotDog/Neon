/**
 * @author WMXPY
 * @namespace Stories_Menu
 * @description Context Menu
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonContextMenu } from "../../src/menu";
import { NeonContextMenuBase } from "../../src/menu/context";
import { wInfo } from "../util";
import ContextMenuMDX from "./context.mdx";

const componentStories = storiesOf('Menu', module);

componentStories.add(
    'Context Menu',
    wInfo([NeonContextMenuBase], [NeonContextMenu, ContextMenuMDX])(() => {

        return (<ContextMenuMDX />);
    }),
);
