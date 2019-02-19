/**
 * @author WMXPY
 * @namespace Neon_Swing
 * @description Pagination
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";

export type NeonPaginationProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonPaginationBase: React.FC<NeonPaginationProps> =
    (props: NeonPaginationProps) => {

        return (<NeonBox {...boxProps(props)}>
            {props.children}
        </NeonBox>);
    };

export const NeonPagination: ThemedComponent<NeonPaginationProps> = withConsumer<NeonPaginationProps>(NeonPaginationBase);
