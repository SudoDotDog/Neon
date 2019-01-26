/**
 * @author WMXPY
 * @namespace Neon_Table
 * @description List
 */

import { _Map } from "@sudoo/bark";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonTableStyle } from "./style";

export type Basics = string | number;

export type NeonSmartListProps = {

    readonly list: Record<Basics, Basics>;
    readonly name?: string;
    readonly value?: string;
} & ThemeProps & BoxProps;

export class NeonSmartListBase extends React.Component<NeonSmartListProps> {

    public render() {
        return (<NeonBox {...boxProps(this.props)}>
            <table className={NeonTableStyle.list}>
                <thead>{this._renderHeader()}</thead>
                <tbody>{this._renderBody()}</tbody>
            </table>
        </NeonBox>);
    }

    private _renderHeader() {
        return (<tr>
            <th className={NeonTableStyle.listKey} >{this.props.name || 'Key'}</th>
            <th>{this.props.value || 'Value'}</th>
        </tr>);
    }

    private _renderBody() {

        const list: Record<Basics, Basics> = this.props.list;
        return _Map.keys(list).map((key: Basics) => {

            const value: Basics = list[key] as Basics;
            return (<tr>
                <td className={NeonTableStyle.listKey}>{key}</td>
                <td>{value}</td>
            </tr>);
        });
    }
}

export const NeonSmartList: ThemedComponent<NeonSmartListProps> = withConsumer<NeonSmartListProps>(NeonSmartListBase);
