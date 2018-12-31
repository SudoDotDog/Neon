/**
 * @author WMXPY
 * @namespace Stories
 * @description Button
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button/index";
import { wInfo } from "../util";
import * as ButtonMD from "./button.md";

storiesOf('Button', module).add(
    'Hello',
    wInfo(ButtonMD)(() => <NeonButton a="123" />),
);
