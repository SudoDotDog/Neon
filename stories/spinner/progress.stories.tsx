/**
 * @author WMXPY
 * @namespace Stories_Spinner
 * @description Progress
 */

import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonProgress } from "../../src/spinner";
import { NeonProgressBase } from "../../src/spinner/progress";
import { wInfo } from "../util";
import ProgressMDX from "./progress.mdx";

const componentStories = storiesOf('Spinner', module);

componentStories.add(
    'Progress Bar',
    wInfo([NeonProgressBase], [NeonProgress, ProgressMDX])(() => {

        const percentage: number = number('Percentage', 35);

        return (<ProgressMDX
            percentage={percentage}
        />);
    }),
);

