/**
 * @author WMXPY
 * @namespace Stories_Card
 * @description Racket
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { NeonRacket, NeonRacketBase } from "card/racket";
import * as React from "react";
import { wInfo } from "../util";
import RacketMDX from "./racket.mdx";

const componentStories = storiesOf('Card', module);

componentStories.add(
    'Racket',
    wInfo([NeonRacketBase], [NeonRacket, RacketMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<RacketMDX name={name} />);
    }),
);
