/**
 * @author WMXPY
 * @namespace Stories_Theme
 * @description Provider
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { NeonButtonBase } from "../../src/button/button";
import { MARGIN, SIGNAL } from "../../src/declare";
import { NeonFlag } from "../../src/flag";
import { NeonFlagBase } from "../../src/flag/flag";
import { NeonThemeProvider } from "../../src/theme";
import { wInfo } from "../util";
import ProviderMDX from "./provider.mdx";

const componentStories = storiesOf('Theme', module);

const getExampleComponents = (label: string) => (
    <React.Fragment>
        <NeonFlag type={SIGNAL.WARNING} message={label} />
        <NeonFlag type={SIGNAL.WARNING} message={label} />
        <NeonFlag type={SIGNAL.WARNING} margin={MARGIN.MEDIUM} message="Margin" />
        <NeonButton>{label}</NeonButton>
    </React.Fragment>
);

componentStories.add(
    'Provider',
    wInfo(
        [NeonButtonBase, NeonFlagBase],
        [React.Fragment, NeonButton, NeonFlag, NeonThemeProvider, ProviderMDX],
    )(() => {

        const label: string = text('Label', 'Label');

        return (<ProviderMDX
            label={label}
            example={getExampleComponents}
        />);
    }),
);

