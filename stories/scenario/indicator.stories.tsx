/**
 * @author WMXPY
 * @namespace Stories_Scenario
 * @description Indicator
 */

import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonPaper } from "../../src/paper";
import { NeonIndicator } from "../../src/spinner";
import { wInfo } from "../util";

const componentStories = storiesOf('Scenario', module);

componentStories.add(
    'Indicator',
    wInfo()(() => {

        const loading: boolean = boolean('Loading', false);

        return (<div>
            <NeonPaper>
                From
                <NeonIndicator loading={loading}>
                    <div>
                        Test<hr />Test<br />
                        Test<hr />Test
                        Test<hr />Test<br />
                        Test<hr />Test
                    </div>
                </NeonIndicator>
            </NeonPaper>
        </div>);
    }),
);

