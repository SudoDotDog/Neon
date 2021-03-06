/**
 * @author WMXPY
 * @namespace Stories_Button
 * @description Dropdown Button
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonDropdownButton } from "../../src/button";
import { NeonDropdownButtonBase } from "../../src/button/dropdown";
import { createAction, wInfo } from "../util";
import DropdownMDX from "./dropdown.mdx";

const componentStories = storiesOf('Button', module);
const events = createAction();

const Actions: any = require("@storybook/addon-actions");

componentStories.add(
    'Dropdown Button',
    wInfo([NeonDropdownButtonBase], [NeonDropdownButton, DropdownMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<DropdownMDX name={name} list={[
            {
                onClick: Actions.action('First'),
                children: "hello",
            },
            {
                onClick: Actions.action('Second'),
                children: <div style={{ color: 'red' }}>Red world</div>,
            },
        ]} events={events} />);
    }),
);
