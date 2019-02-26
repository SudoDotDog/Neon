/**
 * @author WMXPY
 * @namespace Neon_Paper
 * @description Paper
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonPaperStyle } from "./style/paper";

export type NeonPaperProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonPaperBase: React.FC<NeonPaperProps> = (props: NeonPaperProps) => {

    const paperStyle: Classes = NeonPaperStyle.use();

    return (<NeonBox
        {...boxProps(props, paperStyle.wrap)}
    >
        {props.children}
    </NeonBox>);
};

export const NeonPaper: ThemedComponent<NeonPaperProps> = withConsumer<NeonPaperProps>(NeonPaperBase);
