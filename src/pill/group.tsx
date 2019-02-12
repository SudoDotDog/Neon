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

    readonly selected: string[];
    readonly addable?: boolean;
    readonly removable?: boolean;

    readonly addText?: string;
    readonly options?: string[];
    readonly onChange?: (selected: string[]) => void;
} & ThemeProps & BoxProps;

export const NeonPillGroupBase: React.FC<NeonPillGroupProps> = (props: NeonPillGroupProps) => {

    const pills: React.ReactNode[] =
        props.selected.map((key: string, index: number) =>
            (
                <NeonPill
                    key={key}
                    ignoreTheme
                    margin={MARGIN.TINY}
                    onRemove={Boolean(props.removable) ? (() => {
                        const newSelected: string[] = [...props.selected];
                        newSelected.splice(index, 1);

                        (props as any).onChange(newSelected);
                    }) : undefined}
                >
                    {key}
                </NeonPill>
            ),
        );

    const options: string[] = props.options || [];

    return (
        <NeonBox {...boxProps(props, NeonPillStyle.group)}>
            {pills}
            {props.addable &&
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
                            {props.addText || 'Add...'}
                        </option>
                        {options.filter((option: string) => !props.selected.includes(option)).map((option: string) =>
                            <option value={option} key={option} className={NeonPillStyle.option}>{option}</option>)}
                    </select>
                </NeonBox>}
        </NeonBox>
    );
};

export const NeonPillGroup: ThemedComponent<NeonPillGroupProps> = withConsumer<NeonPillGroupProps>(NeonPillGroupBase);
