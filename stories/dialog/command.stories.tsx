/**
 * @author WMXPY
 * @namespace Stories_Dialog
 * @description Gather
 */

import { array, boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN, SIZE } from "../../src/declare";
import { NeonCommand } from "../../src/dialog";
import { NeonCommandBase } from "../../src/dialog/command";
import { NeonButtonGroupElement } from "../../src/swing";
import { createAction, wInfo } from "../util";
import CommandMDX from "./command.mdx";

const componentStories = storiesOf('Dialog', module);
const events = createAction();

componentStories.add(
    'Command',
    wInfo([NeonCommandBase], [NeonCommand, CommandMDX])(() => {

        const value: string = text('Value', 'Value');

        const show: boolean = boolean('Show', true);
        const blur: boolean = boolean('Blur', false);

        const hasOnClose: boolean = boolean('HasOnClose', false);
        const rift: any = text('Rift', MARGIN.SMALL);

        const title: string = text('Title', 'Title');
        const content: string = text('Content', 'Content');

        const buttons: NeonButtonGroupElement[] = array('Buttons', [
            {
                text: 'First',
                ...events,
            },
        ] as NeonButtonGroupElement[]);

        const size: any = text('Size', SIZE.MEDIUM);

        return (<CommandMDX
            title={title}
            content={content}
            hasOnClose={hasOnClose}
            value={value}
            rift={rift}
            show={show}
            blur={blur}
            buttons={buttons}
            size={size}
        />);
    }),
);
