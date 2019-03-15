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

        const title: string = text('Title', 'Title');
        const sub: string = text('Sub', 'Subtitle');

        return (<HeaderMDX
            title={title}
            sub={sub}
        />);
    }),
);
