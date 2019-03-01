/**
 * @author WMXPY
 * @namespace Stories_Float
 * @description Float
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN } from "../../src/declare";
import { NeonFloat } from "../../src/float";
import { NeonFloatBase } from "../../src/float/float";
import { createAction, wInfo } from "../util";
import FloatMDX from "./float.mdx";

const componentStories = storiesOf('Float', module);
const events = createAction();

componentStories.add(
    'Float',
    wInfo([NeonFloatBase], [NeonFloat, FloatMDX])(() => {

        const name: string = text('Name', 'Name');
        const margin: MARGIN = text('Margin', MARGIN.SMALL) as MARGIN;

        return (<FloatMDX
            name={name}
            events={events}
            margin={margin}
        />);
    }),
);
