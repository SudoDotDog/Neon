/**
 * @author WMXPY
 * @namespace Stories_Dialog
 * @description Gather
 */

import { array, boolean, object, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN, SIZE } from "../../src/declare";
import { NeonGather } from "../../src/dialog";
import { NeonGatherBase } from "../../src/dialog/gather";
import { INPUT_TYPE, NeonFromStructure } from "../../src/form";
import { NeonButtonGroupElement } from "../../src/swing";
import { createAction, wInfo } from "../util";
import GatherMDX from "./gather.mdx";

const componentStories = storiesOf('Dialog', module);
const events = createAction();

componentStories.add(
    'Gather',
    wInfo([NeonGatherBase], [NeonGather, GatherMDX])(() => {

        const structure: NeonFromStructure = object('Structure', {
            hello: INPUT_TYPE.TEXT,
            number: {
                autofocus: true,
                type: INPUT_TYPE.NUMBER,
            },
        } as NeonFromStructure);

        const value: Record<string, any> = object('Value', {
            hello: 'Hello',
            number: 123,
        });

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
        ] as any) as any as NeonButtonGroupElement[];

        const size: any = text('Size', SIZE.MEDIUM);

        return (<GatherMDX
            title={title}
            content={content}
            hasOnClose={hasOnClose}
            structure={structure}
            value={value}
            rift={rift}
            show={show}
            blur={blur}
            buttons={buttons}
            size={size}
        />);
    }),
);
