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

const componentStories = storiesOf('Components', module);

componentStories.add(
    'Sticker',
    wInfo([NeonStickerBase], [NeonSticker, StickerMDX])(() => {

        const message: string = text('Message', 'A message');

        return (<StickerMDX message={message}/>);
    }),
);

