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
import { getDefaultSizeClass } from "../#common/style/decorator";
import { SIZE } from "../declare/index";
import { NeonProgressStyle } from "./style/progress";

export type NeonProgressProps = {

    readonly percentage: number;
    readonly size?: SIZE;
} & BoxProps & ThemeProps;

const getPercentage = (condition: any, className: string, value: number): React.ReactNode => {

    if (Boolean(condition)) {

        return (<div className={className}>
            {value}%
        </div>);
    }

    return null;
};

export const NeonProgressBase: React.FC<NeonProgressProps> = (props: NeonProgressProps) => {

    const percentageStyle: Classes = NeonProgressStyle.use();
    const percentage: number = Math.max(Math.min(100, props.percentage), 0);

    return (<NeonBox {...boxProps(
        props,
        percentageStyle.wrap,
        getDefaultSizeClass(props.size || SIZE.NORMAL, percentageStyle),
    )}>
        <div
            style={{
                backgroundColor: props.theme.main.color,
                color: props.theme.main.text,
                width: percentage + '%',
            }}
            className={percentageStyle.bar}
        >
            {getPercentage(
                percentage >= 50,
                percentageStyle.percentage,
                props.percentage,
            )}
        </div>
        <div
            className={percentageStyle.reverse}
        >
            {getPercentage(
                percentage < 50,
                percentageStyle.percentage,
                props.percentage,
            )}
        </div>
    </NeonBox>);
};

export const NeonProgress: ThemedComponent<NeonProgressProps> = withConsumer<NeonProgressProps>(NeonProgressBase);
