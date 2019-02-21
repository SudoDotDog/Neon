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
import { NeonSwitchStyle } from "./style/switch";

export type NeonSwitchProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonSwitchBase: React.FC<NeonSwitchProps> =
    (props: NeonSwitchProps) => {

        const switchStyle: Classes = NeonSwitchStyle.use();

        return (<NeonBox {...boxProps(props, switchStyle.wrap)}>
            {props.children}
        </NeonBox>);
    };

export const NeonSwitch: ThemedComponent<NeonSwitchProps> = withConsumer<NeonSwitchProps>(NeonSwitchBase);
