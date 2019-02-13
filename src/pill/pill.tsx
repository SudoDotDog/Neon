/**
 * @author WMXPY
 * @namespace Neon_Pill
 * @description Pill
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonButton } from "../button/index";
import { SIZE } from "../declare/index";
import { NeonPillStyle } from "./style";

export type NeonPillProps = {

    readonly onRemove?: () => void;
    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonPillBase: React.FC<NeonPillProps> =
    (props: NeonPillProps) => {

        return (
            <NeonBox {...boxProps(props, NeonPillStyle.wrap)}>
                <div className={NeonPillStyle.info}>{props.children}</div>
                {props.onRemove &&
                    <NeonButton
                        size={SIZE.RELATIVE}
                        className={NeonPillStyle.remove}
                        onClick={() => props.onRemove && props.onRemove()}>
                        X
                    </NeonButton>
                }
            </NeonBox>
        );
    };

export const NeonPill: ThemedComponent<NeonPillProps> = withConsumer<NeonPillProps>(NeonPillBase);
