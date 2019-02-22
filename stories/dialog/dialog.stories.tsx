/**
 * @author WMXPY
 * @namespace Stories_Dialog
 * @description Dialog
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonDialog } from "../../src/dialog";
import { NeonDialogBase } from "../../src/dialog/dialog";
import { wInfo } from "../util";
import DialogMDX from "./dialog.mdx";

const componentStories = storiesOf('Dialog', module);

componentStories.add(
    'Dialog',
    wInfo([NeonDialogBase], [NeonDialog, DialogMDX])(() => {

        const message: string = text('Message', 'Message');

        return (<DialogMDX message={message} />);
    }),
);
