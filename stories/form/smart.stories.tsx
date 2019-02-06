/**
 * @author WMXPY
 * @namespace Stories_Form
 * @description Smart
 */

import { boolean, object, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN } from "../../src/declare";
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

        const margin: string = text('margin', MARGIN.SMALL);
        const rift: string = text('rift', MARGIN.SMALL);
        const title: string = text('title', 'title');
        const flag: FLAG_TYPE = text('flag', FLAG_TYPE.PLAIN) as any;
        const message: string = text('message', '');
        const info: string = text('info', '');

        return (<SmartMDX
            title={title}
            margin={margin}
            rift={rift}
            structure={structure}
            loading={loading}
            flag={flag}
            message={message}
            info={info}
        />);
    }),
);

