/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Input
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN } from "../../src/declare";
import { FLAG_TYPE, NeonFlag } from "../../src/flag";
import { wInfo } from "../util";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonFlag',
    wInfo()(() => {

        const message: string = text('Message', 'A message');

        return (<div>
            ERROR
            <NeonFlag type={FLAG_TYPE.ERROR}>
                {message}
            </NeonFlag>

            WARNING
            <NeonFlag type={FLAG_TYPE.WARNING}>
                {message}
            </NeonFlag>

            With Margin
            <NeonFlag
                margin={MARGIN.SMALL}
                type={FLAG_TYPE.ERROR}>
                {message}
            </NeonFlag>
        </div>);
    }),
);

