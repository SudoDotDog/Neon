/**
 * @author WMXPY
 * @namespace Neon_Table
 * @description Table
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonTableStyle } from "./style";

export type NeonTableProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonTableBase: React.SFC<NeonTableProps> =
    (props: NeonTableProps) => {

        return (<NeonBox {...boxProps(props)}>
            <table className={NeonTableStyle.table}>
                {props.children}
            </table>
        </NeonBox>);
    };

export const NeonTable: ThemedComponent<NeonTableProps> = withConsumer<NeonTableProps>(NeonTableBase);
