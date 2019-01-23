/**
 * @author WMXPY
 * @namespace Stories_Scenario
 * @description Smart Form Indicator
 */

import { boolean, object } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MARGIN } from "../../src/declare";
import { INPUT_TYPE, NeonSmartForm } from "../../src/form";
import { NeonIndicator } from "../../src/spinner";
import { NeonIndicatorBase } from "../../src/spinner/indicator";
import { NeonThemeProvider } from "../../src/theme";
import { wInfo } from "../util";

const { action } = require("@storybook/addon-actions");

const componentStories = storiesOf('Scenario', module);

componentStories.add(
    'Smart Form With Indicator',
    wInfo(
        [NeonSmartForm, NeonIndicatorBase],
        [NeonThemeProvider, NeonIndicator],
    )(() => {

        const loading: boolean = boolean('Loading', false);
        const structure: Record<string, INPUT_TYPE> = object('Structure', {
            hello: INPUT_TYPE.TEXT,
            number: INPUT_TYPE.NUMBER,
            world: INPUT_TYPE.PASSWORD,
        });

        return (

            <NeonThemeProvider value={{
                margin: MARGIN.SMALL,
            }}>
                <NeonIndicator  loading={loading}>
                    <NeonSmartForm
                        submit="Click me"
                        onSubmit={(response: any) => {
                            action('Submit')(response);
                        }}
                        form={structure}
                    />
                </NeonIndicator>
            </NeonThemeProvider>);
    }),
);

