/**
 * @author WMXPY
 * @namespace Stories_Table
 * @description List
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonSmartList } from "../../src/table";
import { NeonSmartListBase } from "../../src/table/list";
import { wInfo } from "../util";
import ListMDX from "./list.mdx";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'Smart List',
    wInfo([NeonSmartListBase], [NeonSmartList, ListMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<ListMDX name={name} />);
    }),
);
