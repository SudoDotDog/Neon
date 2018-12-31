/**
 * @author WMXPY
 * @namespace Stories
 * @description Button
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { createAction, wInfo } from "../util";
import * as ButtonMD from "./button.md";

const events = createAction();

storiesOf('Button', module).add(
    'NeonButton',
    wInfo(ButtonMD)(() => {

        const name: string = text('Name', 'Name');

        return (<div>
            <NeonButton {...events}>{name}</NeonButton>
        </div>);
    }),
);
