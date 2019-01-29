/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Pair
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { INPUT_TYPE } from "./declare";
import { NeonEditableText } from "./editableText";
import { NeonInputStyle } from "./style";

export type NeonPairProps = {

    readonly label: string;

    readonly autofocus?: boolean;
    readonly value?: string;

    readonly onBlur?: () => void;
    readonly onChange?: (value: string) => void;
    readonly onEnter?: () => void;

    readonly tabIndex?: number;
    readonly type?: INPUT_TYPE;
} & ThemeProps & BoxProps;

export class NeonPairBase extends React.Component<NeonPairProps> {

    public render() {

        return (<NeonBox {...boxProps(this.props, NeonInputStyle.pair)}>
            <div>{this.props.label}</div>
            <NeonEditableText
                autofocus={this.props.autofocus}
                ignoreTheme
                value={this.props.value}
                onChange={this.props.onChange}
                onBlur={this.props.onBlur}
                onEnter={this.props.onEnter}
                tabIndex={this.props.tabIndex}
                type={this.props.type}
            />
        </NeonBox>);
    }
}

export const NeonPair: ThemedComponent<NeonPairProps> = withConsumer<NeonPairProps>(NeonPairBase);
