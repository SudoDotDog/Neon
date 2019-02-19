/**
 * @author WMXPY
 * @namespace Stories_Navigation
 * @description Navigation
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonNavigation } from "../../src/navigation";
import { NeonNavigationBase } from "../../src/navigation/navigation";
import { createAction, wInfo } from "../util";
import NavigationMDX from "./navigation.mdx";

const componentStories = storiesOf('Navigation', module);
const events = createAction();

componentStories.add(
    'Navigation',
    wInfo([NeonNavigationBase], [NeonNavigation, NavigationMDX])(() => {

        const selected: string = text('Selected', 'First');

        return (<NavigationMDX selected={selected} events={events} />);
    }),
);
