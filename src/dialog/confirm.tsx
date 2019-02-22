/**
 * @author WMXPY
 * @namespace Neon_Dialog
 * @description Confirm
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonConfirmStyle } from "./style/confirm";

export type NeonConfirmProps = {

} & BoxProps & ThemeProps;

export const NeonConfirmBase: React.FC<NeonConfirmProps> =
    (props: NeonConfirmProps) => {

        const confirmStyle: Classes = NeonConfirmStyle.use();

        return (<NeonBox
            {...boxProps(
                props,
                confirmStyle.box,
            )}
        >

        </NeonBox>);
    };

export const NeonConfirm: ThemedComponent<NeonConfirmProps> = withConsumer<NeonConfirmProps>(NeonConfirmBase);
