/**
 * @author WMXPY
 * @namespace Stories_Input
 * @description Password
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonPassword } from "../../src/input";
import { NeonPasswordBase } from "../../src/input/password";
import { createAction, wInfo } from "../util";
import PasswordMDX from "./password.mdx";

const componentStories = storiesOf('Input', module);
const events = createAction();

componentStories.add(
    'Password',
    wInfo([NeonPasswordBase], [NeonPassword, PasswordMDX])(() => {

        const label: string = text('Label', 'Label');
        const value: string = text('Value', 'Value');

        return (<PasswordMDX label={label} value={value} events={events} />);
    }),
);
