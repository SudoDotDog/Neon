/**
 * @author WMXPY
 * @namespace Neon_Swing
 * @description Switch
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";

export type NeonSwitchProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonSwitchBase: React.FC<NeonSwitchProps> =
    (props: NeonSwitchProps) => {

        return (<NeonBox {...boxProps(props)}>
            {props.children}
        </NeonBox>);
    };

export const NeonSwitch: ThemedComponent<NeonSwitchProps> = withConsumer<NeonSwitchProps>(NeonSwitchBase);
