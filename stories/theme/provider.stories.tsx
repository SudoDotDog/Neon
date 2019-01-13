/**
 * @author WMXPY
 * @namespace Stories_Theme
 * @description Theme
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { NeonButtonBase } from "../../src/button/button";
import { MARGIN } from "../../src/declare";
import { FLAG_TYPE, NeonFlag } from "../../src/flag";
import { NeonFlagBase } from "../../src/flag/flag";
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
    wInfo(
        [NeonButtonBase, NeonFlagBase],
        [React.Fragment, NeonButton, NeonFlag, NeonThemeProvider],
        'The <Provider /> take one props [Theme], which is a NeonTheme',
    )(() => {

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

