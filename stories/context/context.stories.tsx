/**
 * @author WMXPY
 * @namespace Stories_Menu
 * @description Context Menu
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonContextMenu, NeonContextMenuProvider } from "../../src/context";
import { NeonContextMenuProviderBase } from "../../src/context/context";
import { NeonContextMenuBase } from "../../src/context/triggerable";
import { wInfo } from "../util";
import ContextMenuMDX from "./context.mdx";

const componentStories = storiesOf('Context', module);

componentStories.add(
    'Context Menu',
    wInfo([NeonContextMenuBase, NeonContextMenuProviderBase], [NeonContextMenu, NeonContextMenuProvider, ContextMenuMDX])(() => {

        return (<ContextMenuMDX />);
    }),
);
