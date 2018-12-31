/**
 * @author WMXPY
 * @namespace Stories
 * @description Button
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button/index";
import { createAction, wInfo } from "../util";
import * as ButtonMD from "./button.md";

const events = createAction();

storiesOf('Button', module).add(
    'Hello',
    wInfo(ButtonMD)(() => {

        const name = text('Name', 'Name');

        return (<div>
            <button {...events}>{name}</button>
            <NeonButton a="123" />
        </div>);
    }),
);
