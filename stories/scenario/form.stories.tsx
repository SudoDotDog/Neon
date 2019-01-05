/**
 * @author WMXPY
 * @namespace Stories_Scenario
 * @description Form
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { MARGIN } from "../../src/declare/index";
import { FLAG_TYPE, NeonFlag } from "../../src/flag";
import { NeonInput } from "../../src/input";
import { NeonPaper } from "../../src/paper";
import { createAction, wInfo } from "../util";

const events = createAction();

const componentStories = storiesOf('Scenario', module);

componentStories.add(
    'Form',
    wInfo()(() => {

        const label: string = text('Label', 'Label');
        const value: string = text('Value', 'Value');

        return (<div>

            Single button
            <NeonPaper>
                <div>
                    Hello World
                    <NeonFlag
                        type={FLAG_TYPE.ERROR}
                        margin={MARGIN.SMALL}>
                        {label}
                    </NeonFlag>
                    <NeonInput
                        {...events}
                        margin={MARGIN.SMALL}
                        value={value}
                        label={label}
                    />
                    <NeonButton
                        margin={MARGIN.SMALL}
                        onClick={() => undefined}>
                        {label}
                    </NeonButton>
                </div>
            </NeonPaper>

            Multiple Button
            <NeonPaper>
                <div>
                    Hello World
                    <NeonInput
                        {...events}
                        margin={MARGIN.SMALL}
                        value={value}
                        label={label}
                    />
                    <div style={{ display: 'flex' }}>

                        <NeonButton
                            margin={MARGIN.SMALL}
                            onClick={() => undefined}>
                            {label}
                        </NeonButton>

                        <NeonButton
                            margin={MARGIN.SMALL}
                            onClick={() => undefined}>
                            {label}
                        </NeonButton>
                    </div>
                </div>
            </NeonPaper>
        </div>);
    }),
);

