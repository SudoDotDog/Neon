/**
 * @author WMXPY
 * @namespace Stories_Scenario
 * @description Card Grid
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonCard } from "../../src/card";
import { MARGIN, SIZE } from "../../src/declare";
import { NeonThemeProvider } from "../../src/theme";
import { wInfo } from "../util";
import './style.css';

const componentStories = storiesOf('Scenario', module);

componentStories.add(
    'Card Grid',
    wInfo()(() => {

        const label: string = text('Label', 'Label');

        return (<div className="card-grid">
            <NeonThemeProvider value={{
                margin: MARGIN.SMALL,
            }}>
                <NeonCard
                    size={SIZE.RELATIVE}
                    style={{ gridArea: 'top' }}>
                    {label}
                </NeonCard>
                <NeonCard
                    size={SIZE.RELATIVE}
                    style={{ gridArea: 'right' }}>
                    {label}
                </NeonCard>
                <NeonCard
                    size={SIZE.RELATIVE}
                    style={{ gridArea: 'medium' }}>
                    {label}
                </NeonCard>
                <NeonCard
                    size={SIZE.RELATIVE}
                    style={{ gridArea: 'center' }}>
                    {label}
                </NeonCard>
            </NeonThemeProvider>
        </div>);
    }),
);

