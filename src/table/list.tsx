/**
 * @author WMXPY
 * @namespace Neon_Table
 * @description List
 */

// eslint-disable-next-line camelcase
import { keys, lash_mutate } from "@sudoo/bark/map";
import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfFalse, mergeClasses } from "../#common/style/decorator";
import { NeonEditableText } from "../input/index";
import { NeonListStyle } from "./style/list";

export type NeonSmartListProps = {

    readonly list: Record<string, string>;
    readonly name?: string;
    readonly editableName?: boolean;
    readonly value?: string;
    readonly editableValue?: boolean;

    readonly onChange?: (value: Record<string, string>) => void;
} & ThemeProps & BoxProps;

export class NeonSmartListBase extends React.Component<NeonSmartListProps> {

    private readonly _listStyle: Classes = NeonListStyle.use();

    public render() {

        return (<NeonBox {...boxProps(this.props)}>
            <table className={this._listStyle.list}>
                <thead>{this._renderHeader()}</thead>
                <tbody>{this._renderBody()}</tbody>
            </table>
        </NeonBox>);
    }

    private _renderHeader() {

        return (<tr>
            <th className={this._listStyle.listKey} >{this.props.name || 'Key'}</th>
            <th>{this.props.value || 'Value'}</th>
        </tr>);
    }

    private _renderBody() {

        const list: Record<string, string> = this.props.list;
        return keys(list).map((key: string, index: number) => {

            const value: string = list[key];
            return (<tr key={index}>
                <td className={mergeClasses(
                    this._listStyle.listKey,
                    assertIfFalse(this.props.editableName, this._listStyle.withBorder),
                )}>
                    {this.props.editableName ? this._renderEditableKey(key, value) : key}
                </td>
                <td className={mergeClasses(
                    assertIfFalse(this.props.editableValue, this._listStyle.withBorder),
                )}>
                    {this.props.editableValue ? this._renderEditableValue(key, value) : value}
                </td>
            </tr>);
        });
    }

    private _renderEditableKey(key: string, value: string) {

        return (<NeonEditableText
            lite
            ignoreTheme
            value={key}
            onChange={(newKey: string) => {
                if (this.props.onChange) {

                    const newList: Record<string, string> =
                        lash_mutate(this.props.list, key, value, newKey);

                    this.props.onChange(newList);
                }
            }}
        />);
    }

    private _renderEditableValue(key: string, value: string) {

        return (<NeonEditableText
            lite
            ignoreTheme
            value={value}
            onChange={(newValue: string) => {
                if (this.props.onChange) {

                    const newList: Record<string, string> =
                        lash_mutate(this.props.list, key, newValue);

                    this.props.onChange(newList);
                }
            }}
        />);
    }
}

export const NeonSmartList: ThemedComponent<NeonSmartListProps> = withConsumer<NeonSmartListProps>(NeonSmartListBase);
