/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Spinner
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonSpinner } from "../../src/spinner/index";
import { wInfo } from "../util";
import * as ButtonMD from "./button.md";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonSpinner',
    wInfo(ButtonMD)(() => {

        return (<NeonSpinner loading />);
    }),
);
