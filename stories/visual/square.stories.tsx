/**
 * @author WMXPY
 * @namespace Stories_Visual
 * @description Square
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonSquare } from "../../src/visual";
import { NeonSquareBase } from "../../src/visual/square";
import { wInfo } from "../util";
import SquareMDX from "./square.mdx";

const componentStories = storiesOf('Visual', module);

componentStories.add(
    'Square',
    wInfo([NeonSquareBase], [NeonSquare, SquareMDX])(() => {

        const content: string = text('Content', 'Content');

        return (<SquareMDX
            content={content}
        />);
    }),
);
