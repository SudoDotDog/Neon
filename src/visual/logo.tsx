/**
 * @author WMXPY
 * @namespace Neon_Visual
 * @description Logo
 */

import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";

export type NeonLogoProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonLogoBase: React.FC<NeonLogoProps> = (props: NeonLogoProps) => {

    return <div></div>;
};

export const NeonLogo: ThemedComponent<NeonLogoProps> = withConsumer<NeonLogoProps>(NeonLogoBase);
