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
import { mergeClasses } from "../#common/style";
import { NeonEditableText } from "../input/index";
import { NeonTableStyle } from "./style";

export type NeonSmartListProps = {

    readonly list: Record<string, string>;
    readonly name?: string;
    readonly editableName?: boolean;
    readonly value?: string;
    readonly editableValue?: boolean;

    readonly onChange?: (value: Record<string, string>) => void;
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

        const list: Record<string, string> = this.props.list;
        return _Map.keys(list).map((key: string, index: number) => {

            const value: string = list[key] as string;
            return (<tr key={index}>
                <td className={mergeClasses(
                    NeonTableStyle.listKey,
                    this.props.editableName ? undefined : NeonTableStyle.withBorder,
                )}>
                    {this.props.editableName ? this._renderEditableKey(key, value) : key}
                </td>
                <td className={mergeClasses(
                    this.props.editableValue ? undefined : NeonTableStyle.withBorder,
                )}>
                    {this.props.editableValue ? this._renderEditableValue(key, value) : value}
                </td>
            </tr>);
        });
    }

    private _renderEditableKey(key: string, value: string) {

        return (<NeonEditableText
            lite
            value={key}
            onChange={(newKey: string) => {
                if (this.props.onChange) {

                    const newList: Record<string, string> =
                        _Map.lash_mutate(this.props.list, key, value, newKey);

                    this.props.onChange(newList);
                }
            }} />);
    }

    private _renderEditableValue(key: string, value: string) {

        return (<NeonEditableText
            lite
            value={value}
            onChange={(newValue: string) => {
                if (this.props.onChange) {

                    const newList: Record<string, string> =
                        _Map.lash_mutate(this.props.list, key, newValue);

                    this.props.onChange(newList);
                }
            }} />);
    }
}

export const NeonSmartList: ThemedComponent<NeonSmartListProps> = withConsumer<NeonSmartListProps>(NeonSmartListBase);
