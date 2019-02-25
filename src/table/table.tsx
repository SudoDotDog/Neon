/**
 * @author WMXPY
 * @namespace Neon_Table
 * @description Table
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonTableStyle } from "./style/table";

export type NeonTableProps = {

    readonly headers?: string[];

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonTableBase: React.FC<NeonTableProps> =
    (props: NeonTableProps) => {

        const tableStyle: Classes = NeonTableStyle.use();

        const header: string[] = props.headers || [];
        const headers = header.map((element: string, index: number) => <th key={index}>{element}</th>);

        return (<NeonBox {...boxProps(props)}>
            <table className={tableStyle.table}>
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>{props.children}</tbody>
            </table>
        </NeonBox>);
    };

export const NeonTable: ThemedComponent<NeonTableProps> = withConsumer<NeonTableProps>(NeonTableBase);
