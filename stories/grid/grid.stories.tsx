/**
 * @author WMXPY
 * @namespace Stories_Grid
 * @description Grid
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonGrid, NeonGridElement } from "../../src/grid";
import { NeonGridElementBase } from "../../src/grid/element";
import { NeonGridBase } from "../../src/grid/grid";
import { createAction, wInfo } from "../util";
import GridMDX from "./grid.mdx";

const componentStories = storiesOf('Grid', module);
const events = createAction();

componentStories.add(
    'Grid',
    wInfo([NeonGridBase, NeonGridElementBase], [NeonGrid, NeonGridElement, GridMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<GridMDX
            name={name}
            events={events}
        />);
    }),
);
