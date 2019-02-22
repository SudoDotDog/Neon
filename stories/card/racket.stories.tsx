/**
 * @author WMXPY
 * @namespace Stories_Card
 * @description Racket
 */

import { number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonRacket } from "../../src/card";
import { NeonRacketBase } from "../../src/card/racket";
import { wInfo } from "../util";
import RacketMDX from "./racket.mdx";

const componentStories = storiesOf('Card', module);

componentStories.add(
    'Racket',
    wInfo([NeonRacketBase], [NeonRacket, RacketMDX])(() => {

        const name: string = text('Name', 'Name');
        const image: string = text('Image', 'link');

        const proportion: number = number('Proportion', 3);

        return (<RacketMDX
            name={name}
            image={image}
            proportion={proportion}
        />);
    }),
);
