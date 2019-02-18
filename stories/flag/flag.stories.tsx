/**
 * @author WMXPY
 * @namespace Stories_Flag
 * @description Flag
 */

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonFlagBase } from "../../src/flag/flag";
import { NeonFlag } from "../../src/flag/index";
import { wInfo } from "../util";
import FlagMDX from "./flag.mdx";

const componentStories = storiesOf('Flag', module);

componentStories.add(
    'Flag',
    wInfo([NeonFlagBase], [NeonFlag, FlagMDX])(() => {

        const message: string = text('Message', 'A message');
        const hidden: boolean = boolean('Hidden', false);

        return (<FlagMDX message={message} hidden={hidden} />);
    }),
);

