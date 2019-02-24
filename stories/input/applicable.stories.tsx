/**
 * @author WMXPY
 * @namespace Stories_Input
 * @description Applicable
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { NeonButtonBase } from "../../src/button/button";
import { NeonApplicable } from "../../src/input";
import { wInfo } from "../util";
import ApplicableMDX from "./applicable.mdx";

const componentStories = storiesOf('Input', module);

componentStories.add(
    'Applicable',
    wInfo([NeonApplicable, NeonButtonBase], [ApplicableMDX, NeonButton])(() => {

        const label: string = text("Label", "Label");

        return (<ApplicableMDX
            label={label}
        />);
    }),
);
