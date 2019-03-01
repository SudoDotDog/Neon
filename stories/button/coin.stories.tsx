/**
 * @author WMXPY
 * @namespace Stories_Button
 * @description Coin
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonCoin } from "../../src/button";
import { NeonCoinBase } from "../../src/button/coin";
import { createAction, wInfo } from "../util";
import CoinMDX from "./coin.mdx";

const componentStories = storiesOf('Button', module);
const events = createAction();

componentStories.add(
    'Coin',
    wInfo([NeonCoinBase], [NeonCoin, CoinMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<CoinMDX name={name} events={events} />);
    }),
);
