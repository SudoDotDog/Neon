/**
 * @author WMXPY
 * @namespace Stories
 * @description Input
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonInput } from "../../src/input";
import { createAction, wInfo } from "../util";
import * as ButtonMD from "./button.md";

const events = createAction();

storiesOf('Form', module).add(
    'NeonInput',
    wInfo(ButtonMD)(() => {

        return (<div>
            <NeonInput {...events} />
        </div>);
    }),
);
