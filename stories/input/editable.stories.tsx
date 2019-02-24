/**
 * @author WMXPY
 * @namespace Stories_Input
 * @description Editable
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonEditable } from "../../src/input";
import { NeonEditableBase } from "../../src/input/editable";
import { createAction, wInfo } from "../util";
import EditableMDX from "./editable.mdx";

const componentStories = storiesOf('Input', module);
const events = createAction();

componentStories.add(
    'Editable',
    wInfo([NeonEditableBase], [NeonEditable, EditableMDX])(() => {

        const label: string = text('Label', 'Label');
        const value: string = text('Value', 'Value');

        return (<EditableMDX
            label={label}
            value={value}
            events={events}
        />);
    }),
);
