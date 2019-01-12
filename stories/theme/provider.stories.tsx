/**
 * @author WMXPY
 * @namespace Stories_Theme
 * @description Theme
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { MARGIN } from "../../src/declare";
import { FLAG_TYPE, NeonFlag } from "../../src/flag";
import { NeonThemeProvider } from "../../src/theme";
import { wInfo } from "../util";

const componentStories = storiesOf('Theme', module);

const getExampleComponents = (label: string) => (
    <React.Fragment>
        <NeonFlag type={FLAG_TYPE.WARNING}>{label}</NeonFlag>
        <NeonFlag type={FLAG_TYPE.WARNING}>{label}</NeonFlag>
        <NeonFlag type={FLAG_TYPE.WARNING} margin={MARGIN.MEDIUM}>Margin Replace</NeonFlag>
        <NeonButton>{label}</NeonButton>
    </React.Fragment>
);

componentStories.add(
    'Provider',
    wInfo()(() => {

        const label: string = text('Label', 'Label');

        return (<div>

            <div>
                Without provider
                {getExampleComponents(label)}
            </div>

            <div>
                with provider
                <NeonThemeProvider value={{
                    margin: MARGIN.SMALL,
                    main: {
                        color: 'red',
                    },
                }}>
                    {getExampleComponents(label)}
                </NeonThemeProvider>
            </div>
        </div>);
    }),
);

