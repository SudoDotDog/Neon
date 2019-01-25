/**
 * @author WMXPY
 * @namespace Stories_Typography
 * @description Typography
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonSub, NeonTitle } from "../../src/typography";
import { NeonSubBase } from "../../src/typography/sub";
import { NeonTitleBase } from "../../src/typography/title";
import { wInfo } from "../util";
import TypographyMDX from "./typography.mdx";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'Typography',
    wInfo([NeonTitleBase, NeonSubBase], [NeonSub, NeonTitle, TypographyMDX])(() => {

        const content: string = text('Text', 'text');
        const target: string = text('Target', 'https://google.com');

        return (<TypographyMDX
            target={target}
            content={content} />);
    }),
);
