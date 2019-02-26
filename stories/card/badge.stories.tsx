/**
 * @author WMXPY
 * @namespace Stories_Card
 * @description Card
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonCard } from "../../src/card";
import { NeonCardBase } from "../../src/card/card";
import { wInfo } from "../util";
import BadgeMDX from "./badge.mdx";

const componentStories = storiesOf('Card', module);

componentStories.add(
    'Badge',
    wInfo([NeonCardBase], [NeonCard, BadgeMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<BadgeMDX name={name} />);
    }),
);
