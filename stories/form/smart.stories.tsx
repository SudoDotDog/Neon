/**
 * @author WMXPY
 * @namespace Stories_Form
 * @description Smart
 */

import { boolean, object, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN, SIZE } from "../../src/declare";
import { FLAG_TYPE } from "../../src/flag";
import { INPUT_TYPE, NeonSmartForm } from "../../src/form";
import { wInfo } from "../util";
import SmartMDX from "./smart.mdx";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'Smart Form',
    wInfo([NeonSmartForm], [SmartMDX])(() => {

        const structure: Record<string, INPUT_TYPE> = object('Structure', {
            hello: INPUT_TYPE.TEXT,
            number: INPUT_TYPE.NUMBER,
            world: INPUT_TYPE.PASSWORD,
        });
        const loading: boolean = boolean('Loading', false);

        const title: string = text('title', 'title');
        const titleSize: SIZE = text('titleSize', SIZE.MEDIUM) as any;
        const titleBorderless: boolean = boolean('title border less', false);

        const margin: string = text('margin', MARGIN.SMALL);
        const rift: string = text('rift', MARGIN.SMALL);

        const flag: FLAG_TYPE = text('flag', FLAG_TYPE.PLAIN) as any;
        const message: string = text('message', '');
        const info: string = text('info', '');
        const cover: string = text('cover', '');
        const covering: boolean = boolean('covering', false);

        return (<SmartMDX
            title={title}
            titleSize={titleSize}
            titleBorderless={titleBorderless}

            margin={margin}
            rift={rift}

            structure={structure}
            loading={loading}
            flag={flag}
            message={message}
            info={info}
            cover={cover}
            covering={covering}
        />);
    }),
);

