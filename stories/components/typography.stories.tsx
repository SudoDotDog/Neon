/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Typography
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN } from "../../src/declare";
import { NeonSub, NeonTitle } from "../../src/typography";
import { wInfo } from "../util";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonTypography',
    wInfo()(() => {

        const content: string = text('Text', 'text');
        const target: string = text('Target', 'https://google.com');

        return (<div>
            <NeonTitle margin={MARGIN.SMALL}>
                {content}
            </NeonTitle>
            <NeonSub margin={MARGIN.SMALL}>
                {content}
            </NeonSub>

            Link
            <NeonSub
                tag="a"
                tagProps={{
                    href: target,
                }}
                margin={MARGIN.SMALL}
            >
                {content}
            </NeonSub>
        </div>);
    }),
);
