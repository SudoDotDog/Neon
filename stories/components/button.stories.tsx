/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Button
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { SIZE } from "../../src/declare";
import { createAction, wInfo } from "../util";
import * as ButtonMD from "./button.md";

const events = createAction();

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonButton',
    wInfo(ButtonMD)(() => {

        const name: string = text('Name', 'Name');

        return (<div>
            Full width
            <NeonButton
                {...events}
                width={SIZE.FULL}>
                {name}
            </NeonButton>

            Medium size full width
            <NeonButton
                {...events}
                size={SIZE.MEDIUM}
                width={SIZE.FULL}>
                {name}
            </NeonButton>

            Full size
            <NeonButton
                {...events}
                size={SIZE.FULL}>
                {name}
            </NeonButton>
            Medium size
            <NeonButton
                {...events}
                size={SIZE.MEDIUM}>
                {name}
            </NeonButton>
            Normal size
            <NeonButton {...events}>
                {name}
            </NeonButton>
        </div>
        );
    }),
);
