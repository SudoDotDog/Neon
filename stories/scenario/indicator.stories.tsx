/**
 * @author WMXPY
 * @namespace Stories_Scenario
 * @description Indicator
 */

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { SIZE, WIDTH } from "../../src/declare";
import { NeonInput } from "../../src/input";
import { NeonPaper } from "../../src/paper";
import { NeonIndicator } from "../../src/spinner";
import { NeonIndicatorBase } from "../../src/spinner/indicator";
import { NeonSpinnerBase } from "../../src/spinner/spinner";
import { wInfo } from "../util";

const componentStories = storiesOf('Scenario', module);

componentStories.add(
    'Indicator',
    wInfo(
        [NeonSpinnerBase, NeonIndicatorBase],
        [NeonButton, NeonInput, NeonPaper, NeonIndicator],
    )(() => {

        const label: string = text('Label', 'Label');
        const loading: boolean = boolean('Loading', false);
        const covering: boolean = boolean('Covering', false);

        return (<div>
            <NeonPaper>
                From
                <NeonIndicator loading={loading} covering={covering} cover={label}>
                    <div>
                        <NeonInput label={label} />
                        <NeonInput label={label} />
                        <NeonInput label={label} />
                        <NeonButton width={WIDTH.FULL} size={SIZE.LARGE}>Hello</NeonButton>
                    </div>
                </NeonIndicator>
                <hr />
                Out of indicator
                <NeonButton>Hello</NeonButton>
            </NeonPaper>
        </div>);
    }),
);

