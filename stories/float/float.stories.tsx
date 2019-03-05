/**
 * @author WMXPY
 * @namespace Stories_Float
 * @description Float
 */

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN, SIZE } from "../../src/declare";
import { NeonFloat } from "../../src/float";
import { NeonFloatBase } from "../../src/float/float";
import { createAction, wInfo } from "../util";
import FloatMDX from "./float.mdx";

const componentStories = storiesOf('Float', module);
const events = createAction();

componentStories.add(
    'Float',
    wInfo([NeonFloatBase], [NeonFloat, FloatMDX])(() => {

        const circle: boolean = boolean('Circle', false);
        const round: boolean = boolean('Round', true);

        const name: string = text('Name', 'Name');
        const margin: MARGIN = text('Margin', MARGIN.SMALL) as MARGIN;
        const size: SIZE = text('Size', SIZE.NORMAL) as SIZE;

        return (<FloatMDX
            circle={circle}
            round={round}
            name={name}
            events={events}
            margin={margin}
            size={size}
        />);
    }),
);
