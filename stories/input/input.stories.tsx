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

        return (<div>
            <NeonInput
                {...events}
                label={label}
            />
        </div>);
    }),
);
