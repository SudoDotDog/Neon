/**
 * @author WMXPY
 * @namespace Neon_Dialog
 * @description Dialog
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonDialogStyle } from "./style/dialog";

export type NeonDialogProps = {

} & BoxProps & ThemeProps;

export const NeonDialogBase: React.FC<NeonDialogProps> =
    (props: NeonDialogProps) => {

        const dialogStyle: Classes = NeonDialogStyle.use();

        return (<NeonBox
            {...boxProps(
                props,
                dialogStyle.box,
            )}
        >

        </NeonBox>);
    };

export const NeonDialog: ThemedComponent<NeonDialogProps> = withConsumer<NeonDialogProps>(NeonDialogBase);
