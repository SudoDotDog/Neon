/**
 * @author WMXPY
 * @namespace Stories_Scenario
 * @description Search
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SIZE } from "../../src/declare";
import { NeonApplicable } from "../../src/input";
import { wInfo } from "../util";

const { action } = require("@storybook/addon-actions");

const componentStories = storiesOf('Scenario', module);

componentStories.add(
    'Search',
    wInfo([NeonApplicable], [])(() => {

        const label: string = text("Label", "Label");

        return (<NeonApplicable
            onApply={action('Apply')}
            label={label}
            size={SIZE.MEDIUM}
        />);
    }),
);
