/**
 * @author WMXPY
 * @namespace Stories_Dialog
 * @description Confirm
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonConfirm } from "../../src/dialog";
import { NeonConfirmBase } from "../../src/dialog/confirm";
import { wInfo } from "../util";
import ConfirmMDX from "./confirm.mdx";

const componentStories = storiesOf('Dialog', module);

componentStories.add(
    'Confirm',
    wInfo([NeonConfirmBase], [NeonConfirm, ConfirmMDX])(() => {

        const message: string = text('Message', 'Message');

        return (<ConfirmMDX message={message} />);
    }),
);
