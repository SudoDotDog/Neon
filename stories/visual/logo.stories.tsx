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
import { createAction, wInfo } from "../util";
import LogoMDX from "./logo.mdx";

const componentStories = storiesOf('Visual', module);
const events = createAction();

componentStories.add(
    'Logo',
    wInfo([NeonLogoBase], [NeonLogo, LogoMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<LogoMDX name={name} events={events} />);
    }),
);
