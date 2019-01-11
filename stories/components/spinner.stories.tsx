/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Spinner
 */

import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonPaper } from "../../src/paper";
import { NeonSpinner } from "../../src/spinner";
import { wInfo } from "../util";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonSpinner',
    wInfo()(() => {

        const isLoading: boolean = boolean('Loading', true);

        return (<NeonPaper>
            <div>
                Hello World
                <NeonSpinner loading={isLoading} />
            </div>
        </NeonPaper>);
    }),
);
