/**
 * @author WMXPY
 * @namespace Stories_Scenario
 * @description Smart
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN } from "../../src/declare";
import { INPUT_TYPE, SmartForm } from "../../src/form";
import { NeonThemeProvider } from "../../src/theme";
import { wInfo } from "../util";

const { action } = require("@storybook/addon-actions");

const componentStories = storiesOf('Scenario', module);

componentStories.add(
    'Smart Form',
    wInfo()(() => {

        const structure: Record<string, INPUT_TYPE> = {
            hello: INPUT_TYPE.TEXT,
            world: INPUT_TYPE.PASSWORD,
        };

        return (

            <NeonThemeProvider value={{
                margin: MARGIN.SMALL,
            }}>
                <SmartForm
                    submit="Click me"
                    onSubmit={(response: any) => {
                        action('Submit')(response);
                    }}
                    form={structure}
                />
            </NeonThemeProvider>);
    }),
);

