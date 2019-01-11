/**
 * @author WMXPY
 * @namespace Stories_Theme
 * @description Theme
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN } from "../../src/declare";
import { FLAG_TYPE, NeonFlag } from "../../src/flag";
import { NeonThemeProvider } from "../../src/theme";
import { wInfo } from "../util";

const componentStories = storiesOf('Theme', module);

componentStories.add(
    'Provider',
    wInfo()(() => {

        const label: string = text('Label', 'Label');

        return (<div>

            <div>
                Without provider

            <NeonFlag type={FLAG_TYPE.WARNING}>
                    {label}
                </NeonFlag>
                <NeonFlag type={FLAG_TYPE.WARNING}>
                    {label}
                </NeonFlag>
                <NeonFlag type={FLAG_TYPE.WARNING}>
                    {label}
                </NeonFlag>
            </div>

            <div>
                with provider
                <NeonThemeProvider value={{
                    margin: MARGIN.SMALL,
                }}>

                    <NeonFlag type={FLAG_TYPE.WARNING}>
                        {label}
                    </NeonFlag>
                    <NeonFlag type={FLAG_TYPE.WARNING}>
                        {label}
                    </NeonFlag>
                    <NeonFlag type={FLAG_TYPE.WARNING}>
                        {label}
                    </NeonFlag>

                    <NeonFlag type={FLAG_TYPE.WARNING} margin={MARGIN.LARGE}>
                        Replace
                    </NeonFlag>

                </NeonThemeProvider>
            </div>
        </div>);
    }),
);

