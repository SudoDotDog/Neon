/**
 * @author WMXPY
 * @namespace Stories_Radio
 * @description Checkbox
 */

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN } from "../../src/declare";
import { NeonCheckbox } from "../../src/radio";
import { NeonCheckboxBase } from "../../src/radio/checkbox";
import { createAction, wInfo } from "../util";
import CheckboxMDX from "./checkbox.mdx";

const componentStories = storiesOf('Radio', module);
const events = createAction();

componentStories.add(
    'Radio',
    wInfo([NeonCheckboxBase], [NeonCheckbox, CheckboxMDX])(() => {

        const checked: boolean = boolean('checked', false);

        const margin: MARGIN = text('Margin', MARGIN.SMALL) as MARGIN;

        return (<CheckboxMDX
            checked={checked}
            margin={margin}
            events={events}
        />);
    }),
);
