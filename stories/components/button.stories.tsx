/**
 * @author WMXPY
 * @namespace Stories_Components
 * @description Button
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../../src/button";
import { NeonButtonBase } from "../../src/button/button";
import { SIZE, WIDTH } from "../../src/declare";
import { createAction, wInfo } from "../util";
import * as ButtonMD from "./button.md";

const events = createAction();

const componentStories = storiesOf('Components', module);

componentStories.add(
    'NeonButton',
    wInfo([NeonButtonBase], [NeonButton], ButtonMD)(() => {

        const name: string = text('Name', 'Name');

        return (<div>
            Full width
            <NeonButton
                {...events}
                width={WIDTH.FULL}>
                {name}
            </NeonButton>

            Medium size full width
            <NeonButton
                {...events}
                size={SIZE.MEDIUM}
                width={WIDTH.FULL}>
                {name}
            </NeonButton>

            Large size
            <NeonButton
                {...events}
                size={SIZE.LARGE}>
                {name}
            </NeonButton>
            Medium size
            <NeonButton
                {...events}
                size={SIZE.MEDIUM}>
                {name}
            </NeonButton>
            Normal size
            <NeonButton {...events}>
                {name}
            </NeonButton>

            Disabled
            <NeonButton disabled {...events}>
                {name}
            </NeonButton>

            <div style={{
                display: 'block',
                height: '100px',
                width: '300px',
                border: '2px solid red',
            }}>

                <NeonButton
                    size={SIZE.RELATIVE}
                    {...events}>
                    {name}
                </NeonButton>
            </div>

            <div style={{ display: 'flex' }}>
                Relative size
                <div style={{
                    height: '150px',
                    width: '300px',
                    border: '2px solid red',
                }}>
                    <NeonButton
                        size={SIZE.RELATIVE}
                        {...events}>
                        {name}
                    </NeonButton>
                </div>

                Relative size
                <div style={{
                    display: 'flex',
                    height: '100px',
                    width: '300px',
                    border: '2px solid red',
                }}>
                    <div style={{
                        flex: 1,
                    }}>Something</div>
                    <NeonButton
                        size={SIZE.RELATIVE}
                        {...events}>
                        {name}
                    </NeonButton>
                </div>
            </div>

        </div>
        );
    }),
);
