/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Typography
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ALIGN, MARGIN } from "../../src/declare";
import { NeonSub, NeonTitle } from "../../src/typography";
import { NeonSubBase } from "../../src/typography/sub";
import { NeonTitleBase } from "../../src/typography/title";
import { wInfo } from "../util";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonTypography',
    wInfo([NeonTitleBase, NeonSubBase], [NeonSub, NeonTitle])(() => {

        const content: string = text('Text', 'text');
        const target: string = text('Target', 'https://google.com');

        return (<div>
            <NeonTitle margin={MARGIN.SMALL}>
                {content}
            </NeonTitle>

            Center
            <NeonTitle
                align={ALIGN.CENTER}
                margin={MARGIN.SMALL}>
                {content}
            </NeonTitle>

            Right
            <NeonTitle
                align={ALIGN.RIGHT}
                margin={MARGIN.SMALL}>
                {content}
            </NeonTitle>

            Empty
            <NeonTitle
                align={ALIGN.RIGHT}
                margin={MARGIN.SMALL}>
            </NeonTitle>

            Space
            <NeonTitle
                margin={MARGIN.SMALL}>
                &nbsp;
            </NeonTitle>

            <hr />

            <NeonSub margin={MARGIN.SMALL}>
                {content}
            </NeonSub>

            Link
            <NeonSub
                href={target}
                margin={MARGIN.SMALL}
            >
                {content}
            </NeonSub>

            Right
            <NeonSub
                align={ALIGN.RIGHT}
                href={target}
                margin={MARGIN.SMALL}
            >
                {content}
            </NeonSub>
        </div>);
    }),
);
