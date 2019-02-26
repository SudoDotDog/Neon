/**
 * @author WMXPY
 * @namespace Stories_Text
 * @description Field
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonTextField } from "../../src/text";
import { NeonTextFieldBase } from "../../src/text/field";
import { wInfo } from "../util";
import FieldMDX from "./field.mdx";

const componentStories = storiesOf('Text', module);

componentStories.add(
    'Text Field',
    wInfo([NeonTextFieldBase], [NeonTextField, FieldMDX])(() => {

        const label: string = text('Label', 'Label');
        const value: string = text('Value', 'Value');

        return (<FieldMDX
            label={label}
            value={value}
        />);
    }),
);
