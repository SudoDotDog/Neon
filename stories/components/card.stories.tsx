/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Card
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonCard } from "../../src/card";
import { NeonCardBase } from "../../src/card/card";
import { MARGIN, SIZE } from "../../src/declare";
import { wInfo } from "../util";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonCard',
    wInfo([NeonCardBase], [NeonCard])(() => {

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
                    upper="Large"
                    size={SIZE.LARGE}
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
                    size={SIZE.RELATIVE}
                    margin={MARGIN.SMALL}>
                    {name}
                </NeonCard>
            </div>

            Full Size (Margin setting will be ignored)
            <div style={{ height: '150px', width: '100px' }}>
                <NeonCard
                    upper="Full"
                    size={SIZE.FULL}>
                    {name}
                </NeonCard>
            </div>
        </div>
        );
    }),
);
