/**
 * @author WMXPY
 * @namespace Stories
 * @description Scenario
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { NeonInput } from "../../src/input";
import { NeonPaper } from "../../src/paper";
import { createAction, wInfo } from "../util";

const events = createAction();

const componentStories = storiesOf('Scenario', module);

componentStories.add(
    'Form',
    wInfo('')(() => {

        const label: string = text('Label', 'Label');
        const value: string = text('Value', 'Value');

        return (<NeonPaper>
            <div>
                Hello World
                <NeonInput
                    {...events}
                    style={{
                        margin: '5px',
                    }}
                    value={value}
                    label={label}
                />
                <NeonButton
                    style={{
                        margin: '5px',
                    }}
                    onClick={() => undefined}>
                    {label}
                </NeonButton>
            </div>
        </NeonPaper>);
    }),
);

