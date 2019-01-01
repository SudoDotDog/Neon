/**
 * @author WMXPY
 * @namespace Stories
 * @description Input
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonInput } from "../../src/input";
import { createAction, wInfo } from "../util";

const events = createAction();

storiesOf('Form', module).add(
    'NeonInput',
    wInfo('')(() => {

        const label: string = text('Label', 'Label');
        const value: string = text('Value', 'Value');

        return (<div>
            WithValue
            <NeonInput
                {...events}
                value={value}
                label={label}
            />
            Empty
            <NeonInput
                {...events}
                label={label}
            />
        </div>);
    }),
);
