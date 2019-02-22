/**
 * @author WMXPY
 * @namespace Stories_Dialog
 * @description Dialog
 */

import { boolean, text } from "@storybook/addon-knobs";
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

        const show: boolean = boolean('Show', false);
        const blur: boolean = boolean('Blur', false);

        return (<DialogMDX
            message={message}
            show={show}
            blur={blur}
        />);
    }),
);
