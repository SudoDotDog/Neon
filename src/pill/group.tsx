/**
 * @author WMXPY
 * @namespace Neon_Pill
 * @description Group
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { MARGIN } from "../declare/index";
import { NeonPill } from "./pill";
import { NeonPillStyle } from "./style";

export type NeonPillGroupProps = {

    selected: string[];
    add?: string;
    options?: string[];
    onChange?: (selected: string[]) => void;
} & ThemeProps & BoxProps;

export const NeonPillGroupBase: React.FC<NeonPillGroupProps> = (props: NeonPillGroupProps) => {

    const pills: React.ReactNode[] =
        props.selected.map((key: string, index: number) =>
            (
                <NeonPill
                    key={key}
                    ignoreTheme
                    margin={MARGIN.TINY}
                    onRemove={props.onChange && (() => {
                        const newSelected: string[] = [...props.selected];
                        newSelected.splice(index, 1);

                        (props as any).onChange(newSelected);
                    })}
                >
                    {key}
                </NeonPill>
            ),
        );

    return (
        <NeonBox {...boxProps(props, NeonPillStyle.group)}>
            {pills}
            {props.options &&
                <NeonBox margin={MARGIN.TINY} className={NeonPillStyle.add}>
                    <select
                        value="__Neon_Default_Option"
                        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                            props.onChange &&
                            props.onChange([...props.selected, event.target.value])}
                        className={NeonPillStyle.select}>
                        <option
                            value="__Neon_Default_Option"
                            disabled
                            hidden>
                            {props.add || 'Add...'}
                        </option>
                        {props.options.filter((option: string) => !props.selected.includes(option)).map((option: string) =>
                            <option value={option} key={option} className={NeonPillStyle.option}>{option}</option>)}
                    </select>
                </NeonBox>}
        </NeonBox>
    );
};

export const NeonPillGroup: ThemedComponent<NeonPillGroupProps> = withConsumer<NeonPillGroupProps>(NeonPillGroupBase);
