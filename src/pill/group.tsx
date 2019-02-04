/**
 * @author WMXPY
 * @namespace Neon_Pill
 * @description Group
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonButton } from "../button/index";
import { MARGIN, SIZE } from "../declare/index";
import { NeonPill } from "./pill";
import { NeonPillStyle } from "./style";

export type NeonPillGroupProps = {

    selected: string[];
    options?: string[];
    onChange?: (selected: string[]) => void;
} & ThemeProps & BoxProps;

export const NeonPillGroupBase: React.FC<NeonPillGroupProps> =
    (props: NeonPillGroupProps) => {

        const pills: React.ReactNode[] =
            props.selected.map((key: string) =>
                <NeonPill
                    ignoreTheme
                    margin={MARGIN.TINY}
                    key={key}>
                    {key}
                </NeonPill>);

        return (
            <NeonBox {...boxProps(props, NeonPillStyle.group)}>
                {pills}
                {props.options &&
                    <NeonButton
                        margin={MARGIN.TINY}
                        size={SIZE.RELATIVE}
                        className={NeonPillStyle.addButton}>
                        +
                </NeonButton>}
            </NeonBox>
        );
    };

export const NeonPillGroup: ThemedComponent<NeonPillGroupProps> = withConsumer<NeonPillGroupProps>(NeonPillGroupBase);
