/**
 * @author WMXPY
 * @namespace Stories_Pivot
 * @description Header
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonHeader } from "../../src/pivot";
import { NeonHeaderBase } from "../../src/pivot/header";
import { wInfo } from "../util";
import HeaderMDX from "./header.mdx";

const componentStories = storiesOf('Pivot', module);

componentStories.add(
    'Header',
    wInfo([NeonHeaderBase], [NeonHeader, HeaderMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<HeaderMDX
            name={name}
        />);
    }),
);
