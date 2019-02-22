/**
 * @author WMXPY
 * @namespace Neon_Swing
 * @description Switch
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTri, mergeClasses } from "../#common/style/decorator";
import { NeonButton } from "../button/button";
import { SIZE } from "../declare/index";
import { NeonSwitchStyle } from "./style/switch";

export type NeonSwitchProps = {

    readonly size?: SIZE;
    readonly toggled?: boolean;

    readonly active?: string;
    readonly inactive?: string;

    readonly onChange?: (state: boolean) => void;

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonSwitchBase: React.FC<NeonSwitchProps> =
    (props: NeonSwitchProps) => {

        const switchStyle: Classes = NeonSwitchStyle.use();

        const active: string = props.active || 'ON';
        const inactive: string = props.inactive || 'OFF';

        const sizeClass: string = (() => {
            switch (props.size) {
                case SIZE.MEDIUM: return switchStyle.medium;
                case SIZE.LARGE: return switchStyle.large;
                case SIZE.FULL: return switchStyle.full;
                case SIZE.RELATIVE: return switchStyle.relative;
                case SIZE.NORMAL:
                default: return switchStyle.normal;
            }
        })();

        return (<NeonBox {...boxProps(
            props,
            switchStyle.wrap,
            sizeClass,
        )}>
            <div className={switchStyle.intro}>{props.children}</div>
            <div className={switchStyle.room}>
                <div>{inactive}</div>
                <div style={{ flex: 1 }}></div>
                <div>{active}</div>
                <NeonButton
                    ignoreTheme
                    size={SIZE.RELATIVE}
                    onClick={() => {
                        if (props.onChange) {
                            props.onChange(!Boolean(props.toggled));
                        }
                    }}
                    className={mergeClasses(
                        switchStyle.switch,
                        assertIfTri(props.toggled, 'toggled', 'not-toggled'),
                    )}>
                    {props.toggled ? active : inactive}
                </NeonButton>
            </div>
        </NeonBox>);
    };

export const NeonSwitch: ThemedComponent<NeonSwitchProps> = withConsumer<NeonSwitchProps>(NeonSwitchBase);
