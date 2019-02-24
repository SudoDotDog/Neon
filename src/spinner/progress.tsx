/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Progress Bar
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonProgressStyle } from "./style/progress";

export type NeonProgressProps = {

    readonly percentage: number;
} & BoxProps & ThemeProps;

export const NeonProgressBase: React.FC<NeonProgressProps> = (props: NeonProgressProps) => {

    const percentageStyle: Classes = NeonProgressStyle.use();

    return (<NeonBox {...boxProps(props, percentageStyle.wrap)}>
        <div className={percentageStyle.bar}>
            {props.percentage}
        </div>
    </NeonBox>);
};

export const NeonProgress: ThemedComponent<NeonProgressProps> = withConsumer<NeonProgressProps>(NeonProgressBase);
