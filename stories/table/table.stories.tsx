/**
 * @author WMXPY
 * @namespace Stories_Table
 * @description Table
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonTable, NeonTableBase } from "../../src/table";
import { createAction, wInfo } from "../util";
import TableMDX from "./table.mdx";

const componentStories = storiesOf('Components', module);
const events = createAction();

componentStories.add(
    'Table',
    wInfo([NeonTableBase], [NeonTable, TableMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<TableMDX name={name} events={events} />);
    }),
);
