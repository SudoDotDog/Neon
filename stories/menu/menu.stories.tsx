/**
 * @author WMXPY
 * @namespace Stories_Menu
 * @description Menu
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonMenu, NeonMenuItem } from "../../src/menu";
import { NeonMenuBase } from "../../src/menu/menu";
import { wInfo } from "../util";
import MenuMDX from "./menu.mdx";

const componentStories = storiesOf('Menu', module);

componentStories.add(
    'Menu',
    wInfo([NeonMenuBase, NeonMenuItem], [NeonMenu, MenuMDX])(() => {

        const element1: string = text('Element 1', 'Element 1');
        const element2: string = text('Element 2', 'ReactNode element');
        const element3: string = text('Element 3', 'Element 3');

        return (<MenuMDX
            element1={element1}
            element2={<div style={{ color: 'red' }}>{element2}</div>}
            element3={element3}
        />);
    }),
);
