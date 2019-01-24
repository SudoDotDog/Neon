/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Button
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { NeonButtonBase } from "../../src/button/button";
import { wInfo } from "../util";
import ButtonMDX from "./button.mdx";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonButton',
    wInfo([NeonButtonBase], [NeonButton])(() => {

        const name: string = text('Name', 'Name');

        return (<ButtonMDX name={name} />);
    }),
);
