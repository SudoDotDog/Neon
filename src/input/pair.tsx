/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Pair
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { INPUT_TYPE } from "./declare";
import { NeonEditableText } from "./editableText";
import { NeonPairStyle } from "./style/pair";

export type NeonPairProps = {

    readonly label: string;

    readonly autofocus?: boolean;
    readonly editable?: boolean;
    readonly value?: string;

    readonly onBlur?: () => void;
    readonly onChange?: (value: string) => void;
    readonly onEnter?: () => void;

    readonly tabIndex?: number;
    readonly type?: INPUT_TYPE;
} & ThemeProps & BoxProps;

export const NeonPairBase: React.FC<NeonPairProps> = (props: NeonPairProps) => {

    const pairStyle: Classes = NeonPairStyle.use();

    return (
        <NeonBox
            {...boxProps(props, pairStyle.pair)}
        >
            <div
                className={pairStyle.pairLabel}>
                {props.label}
            </div>
            {
                props.editable
                    ? <NeonEditableText
                        className={pairStyle.pairText}
                        autofocus={props.autofocus}
                        ignoreTheme
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        onEnter={props.onEnter}
                        tabIndex={props.tabIndex}
                        type={props.type}
                    />
                    : <div
                        className={pairStyle.pairRaw}>
                        {props.value}
                    </div>
            }
        </NeonBox>
    );
};

export const NeonPair: ThemedComponent<NeonPairProps> = withConsumer<NeonPairProps>(NeonPairBase);
