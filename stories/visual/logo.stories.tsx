/**
 * @author WMXPY
 * @namespace Stories_Visual
 * @description Logo
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonLogo } from "../../src/visual";
import { NeonLogoBase } from "../../src/visual/logo";
import { wInfo } from "../util";
import LogoMDX from "./logo.mdx";

const componentStories = storiesOf('Visual', module);

componentStories.add(
    'Logo',
    wInfo([NeonLogoBase], [NeonLogo, LogoMDX])(() => {

        const title: string = text('Title', 'Title');
        const sub: string = text('SubTitle', 'SubTitle');

        return (<LogoMDX
            title={title}
            sub={sub}
        />);
    }),
);
