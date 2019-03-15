/**
 * @author WMXPY
 * @namespace Neon_Pivot
 * @description Footer
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonFooterStyle } from "./style/footer";

export type NeonFooterProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonFooterBase: React.FC<NeonFooterProps> = (props: NeonFooterProps) => {

    const footerStyle: Classes = NeonFooterStyle.use();

    return (<NeonBox
        {...boxProps(props, footerStyle.wrap)}
    >
        {props.children}
    </NeonBox>);
};

export const NeonFooter: ThemedComponent<NeonFooterProps> = withConsumer<NeonFooterProps>(NeonFooterBase);
