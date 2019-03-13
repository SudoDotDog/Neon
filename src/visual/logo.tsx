/**
 * @author WMXPY
 * @namespace Neon_Visual
 * @description Logo
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonLogoStyle } from "./style/logo";

export type NeonLogoProps = {

    readonly title: string;
    readonly sub?: string;
} & ThemeProps & BoxProps;

export const NeonLogoBase: React.FC<NeonLogoProps> = (props: NeonLogoProps) => {

    const logoStyle: Classes = NeonLogoStyle.use();

    return <NeonBox
        {...boxProps(props)}
    >
        <div className={logoStyle.title}>{props.title}</div>
        <div className={logoStyle.sub}>{props.sub}</div>
    </NeonBox>;
};

export const NeonLogo: ThemedComponent<NeonLogoProps> = withConsumer<NeonLogoProps>(NeonLogoBase);
