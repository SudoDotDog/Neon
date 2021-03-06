/**
 * @author WMXPY
 * @namespace Stories_Dialog
 * @description Dialog
 */

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SIZE } from "../../src/declare";
import { NeonDialog } from "../../src/dialog";
import { NeonDialogBase } from "../../src/dialog/dialog";
import { wInfo } from "../util";
import DialogMDX from "./dialog.mdx";

const componentStories = storiesOf('Dialog', module);

componentStories.add(
    'Dialog',
    wInfo([NeonDialogBase], [NeonDialog, DialogMDX])(() => {

        const title: string = text('Title', 'Title');
        const message: string = text('Message', 'Message');

        const hasOnClose: boolean = boolean('HasOnClose', false);

        const show: boolean = boolean('Show', true);
        const blur: boolean = boolean('Blur', false);

        const size: any = text('Size', SIZE.MEDIUM);

        return (<DialogMDX
            title={title}
            message={message}
            hasOnClose={hasOnClose}
            show={show}
            blur={blur}
            size={size}
        />);
    }),
);
