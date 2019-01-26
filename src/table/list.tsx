/**
 * @author WMXPY
 * @namespace Neon_Table
 * @description List
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonTableStyle } from "./style";
import { _Map } from "@sudoo/bark";

export type Basics = string | number;

export type NeonSmartListProps = {

    readonly list: Record<Basics, Basics>;
    readonly name?: string;
    readonly value?: string;
    readonly children?: any;
} & ThemeProps & BoxProps;

export class NeonSmartListBase extends React.Component<NeonSmartListProps> {

    public render() {
        return (<NeonBox {...boxProps(this.props)}>
            <table className={NeonTableStyle.list}>
                {this.props.children}
            </table>
        </NeonBox>);
    }

    private _renderTh() {


    }
};

export const NeonSmartList: ThemedComponent<NeonSmartListProps> = withConsumer<NeonSmartListProps>(NeonSmartListBase);
