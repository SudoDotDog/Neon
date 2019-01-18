/**
 * @author WMXPY
 * @namespace Stories_Scenario
 * @description Smart
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FORM_TYPE, SmartForm } from "../../src/form";
import { createAction, wInfo } from "../util";

const events = createAction();

const componentStories = storiesOf('Scenario', module);

componentStories.add(
    'Smart Form',
    wInfo(
        [],
        [],
    )(() => {

        // const label: string = text('Label', 'Label');
        // const value: string = text('Value', 'Value');

        const structure: Record<string, FORM_TYPE> = {
            hello: FORM_TYPE.STRING,
        };

        return (<SmartForm form={structure} {...events} />);
    }),
);

