/**
 * @author WMXPY
 * @namespace Stories_Dialog
 * @description Gather
 */

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonGather } from "../../src/dialog";
import { NeonGatherBase } from "../../src/dialog/gather";
import { wInfo } from "../util";
import GatherMDX from "./gather.mdx";

const componentStories = storiesOf('Dialog', module);

componentStories.add(
    'Gather',
    wInfo([NeonGatherBase], [NeonGather, GatherMDX])(() => {

        const show: boolean = boolean('Show', false);
        const blur: boolean = boolean('Blur', false);

        const label: string = text('Label', 'Label');

        return (<GatherMDX
            label={label}
            show={show}
            blur={blur}
        />);
    }),
);
