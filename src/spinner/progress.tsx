/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Progress Bar
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";

export type NeonProgressProps = {

    readonly percentage: number;
} & BoxProps & ThemeProps;

export const NeonProgressBase: React.FC<NeonProgressProps> = (props: NeonProgressProps) => {


    return (<NeonBox {...boxProps(props)}>
        {props.percentage}
    </NeonBox>);
};

export const NeonProgress: ThemedComponent<NeonProgressProps> = withConsumer<NeonProgressProps>(NeonProgressBase);
