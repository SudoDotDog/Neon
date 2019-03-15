/**
 * @author WMXPY
 * @namespace Neon_Pivot
 * @description Header
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonHeaderStyle } from "./style/header";

export type NeonHeaderProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonHeaderBase: React.FC<NeonHeaderProps> = (props: NeonHeaderProps) => {

    const headerStyle: Classes = NeonHeaderStyle.use();

    return (<NeonBox
        {...boxProps(props, headerStyle.wrap)}
    >
        {props.children}
    </NeonBox>);
};

export const NeonHeader: ThemedComponent<NeonHeaderProps> = withConsumer<NeonHeaderProps>(NeonHeaderBase);
