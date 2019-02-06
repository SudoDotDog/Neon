/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Indicator
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonSpinner } from "./spinner";
import { NeonIndicatorStyle } from "./style";

export type NeonIndicatorProps = {

    readonly loading: boolean;

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonIndicatorBase: React.FC<NeonIndicatorProps> = (props: NeonIndicatorProps) => {

    const classes: string[] = [
        NeonIndicatorStyle.wrap,
        props.loading ? NeonIndicatorStyle.invisible : NeonIndicatorStyle.visible,
    ];

    return (<NeonBox {...boxProps(props, NeonIndicatorStyle.box)}>
        <div className={classes.join(' ')} >
            {props.children}
        </div>
        <div className={NeonIndicatorStyle.spinner}>
            <NeonSpinner loading={props.loading} />
        </div>
    </NeonBox>);
};

export const NeonIndicator: ThemedComponent<NeonIndicatorProps> = withConsumer<NeonIndicatorProps>(NeonIndicatorBase);
