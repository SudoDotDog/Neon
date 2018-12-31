/**
 * @author WMXPY
 * @namespace Stories
 * @description Input
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonInput } from "../../src/input";
import { createAction, wInfo } from "../util";

const events = createAction();

storiesOf('Form', module).add(
    'NeonInput',
    wInfo('')(() => {

        return (<div>
            <NeonInput {...events} />
        </div>);
    }),
);
