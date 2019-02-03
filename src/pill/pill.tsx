/**
 * @author WMXPY
 * @namespace Neon_Pill
 * @description Pill
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";

export type NeonPillProps = {
} & ThemeProps & BoxProps;

export const NeonPillBase: React.FC<NeonPillProps> =
    (props: NeonPillProps) => {

        return (<NeonBox {...boxProps(props)}>
            Pill
        </NeonBox>);
    };

export const NeonPill: ThemedComponent<NeonPillProps> = withConsumer<NeonPillProps>(NeonPillBase);
