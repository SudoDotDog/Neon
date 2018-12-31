/**
 * @author WMXPY
 * @namespace Stories
 * @description Button
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button/index";
import { createAction, wInfo } from "../util";
import * as ButtonMD from "./button.md";

const events = createAction();

storiesOf('Button', module).add(
    'Hello',
    wInfo(ButtonMD)(() => (<div>
        <button {...events}>EVENTS</button>
        <NeonButton a="123" />
    </div>)),
);
