/**
 * @author WMXPY
 * @namespace Stories_Scenario
 * @description Indicator
 */

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { NeonInput } from "../../src/input";
import { NeonPaper } from "../../src/paper";
import { NeonIndicator } from "../../src/spinner";
import { NeonIndicatorBase } from "../../src/spinner/indicator";
import { NeonSpinnerBase } from "../../src/spinner/spinner";
import { wInfo } from "../util";
import IndicatorMDX from "./indicator.mdx";

const componentStories = storiesOf('Spinner', module);

componentStories.add(
    'Indicator',
    wInfo(
        [NeonSpinnerBase, NeonIndicatorBase],
        [NeonButton, NeonInput, NeonPaper, NeonIndicator, IndicatorMDX],
    )(() => {

        const label: string = text('Label', 'Label');
        const loading: boolean = boolean('Loading', false);
        const covering: boolean = boolean('Covering', false);

        return (<IndicatorMDX
            label={label}
            loading={loading}
            covering={covering}
        />);
    }),
);

