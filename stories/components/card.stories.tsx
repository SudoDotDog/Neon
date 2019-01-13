/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Card
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonCard } from "../../src/card";
import { MARGIN, SIZE } from "../../src/declare";
import { wInfo } from "../util";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonCard',
    wInfo()(() => {

        const name: string = text('Name', 'Name');

        return (<div>

            <NeonCard margin={MARGIN.SMALL}>
                {name}
            </NeonCard>

            With Upper
            <NeonCard
                upper="Upper content"
                margin={MARGIN.SMALL}>
                {name}
            </NeonCard>

            Other sizes
            <div style={{ display: 'flex' }}>
                <NeonCard
                    upper="Medium"
                    size={SIZE.MEDIUM}
                    margin={MARGIN.SMALL}>
                    {name}
                </NeonCard>

                <NeonCard
                    upper="Full"
                    size={SIZE.FULL}
                    margin={MARGIN.SMALL}>
                    {name}
                </NeonCard>
            </div>

            No Separator
            <NeonCard
                upper="No Separator"
                separator={false}
                margin={MARGIN.SMALL}>
                {name}
            </NeonCard>

            Relative Size
            <div style={{ height: '150px', width: '100px' }}>
                <NeonCard
                    upper="Relative"
                    size={SIZE.RELATIVE}>
                    {name}
                </NeonCard>
            </div>
        </div>
        );
    }),
);
