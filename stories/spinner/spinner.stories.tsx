/**
 * @author WMXPY
 * @namespace Stories_Spinner
 * @description Spinner
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonSpinner } from "../../src/spinner";
import { NeonSpinnerBase } from "../../src/spinner/spinner";
import { wInfo } from "../util";
import SpinnerMDX from "./spinner.mdx";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'Spinner',
    wInfo([NeonSpinnerBase], [NeonSpinner, SpinnerMDX])(() => {

        return (<SpinnerMDX />);
    }),
);

