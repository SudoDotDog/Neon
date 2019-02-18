/**
 * @author WMXPY
 * @namespace Stories_Flag
 * @description Sticker
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonSticker } from "../../src/flag";
import { NeonStickerBase } from "../../src/flag/sticker";
import { wInfo } from "../util";
import StickerMDX from "./sticker.mdx";

const componentStories = storiesOf('Flag', module);

componentStories.add(
    'Sticker',
    wInfo([NeonStickerBase], [NeonSticker, StickerMDX])(() => {

        const title: string = text('Title', 'Title');
        const info: string = text('Info', 'Info');

        return (<StickerMDX title={title} info={info}/>);
    }),
);

