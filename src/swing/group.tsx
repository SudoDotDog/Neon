/**
 * @author WMXPY
 * @namespace Neon_Swing
 * @description Button Group
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonButtonGroupStyle } from "./style/group";

export type NeonButtonGroupProps = {

} & ThemeProps & BoxProps;

export const NeonButtonGroupBase: React.FC<NeonButtonGroupProps> = (props: NeonButtonGroupProps) => {

    const buttonGroupStyle: Classes = NeonButtonGroupStyle.use();

    return (<NeonBox
        className={buttonGroupStyle.box}
        {...boxProps(props)}
    >

    </NeonBox>);
};

export const NeonButtonGroup: ThemedComponent<NeonButtonGroupProps> = withConsumer<NeonButtonGroupProps>(NeonButtonGroupBase);
