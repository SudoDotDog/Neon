/**
 * @author WMXPY
 * @namespace Neon_Pill
 * @description Group
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { MARGIN } from "../declare/index";
import { NeonPill } from "./pill";
import { NeonGroupStyle } from "./style/group";

export type NeonPillGroupProps = {

    readonly selected: string[];
    readonly render?: (value: string) => React.ReactNode;

    readonly addable?: boolean;
    readonly removable?: boolean;
    readonly removeIcon?: React.ReactNode;

    readonly addText?: string;
    readonly options?: string[];
    readonly onChange?: (selected: string[]) => void;
} & ThemeProps & BoxProps;

export const NeonPillGroupBase: React.FC<NeonPillGroupProps> = (props: NeonPillGroupProps) => {

    const groupStyle: Classes = NeonGroupStyle.use();

    const pills: React.ReactNode[] = props.selected.map((key: string, index: number) => {

        const content: React.ReactNode = props.render ? props.render(key) : key;
        return (<NeonPill
            ignoreTheme
            key={key}
            margin={MARGIN.TINY}
            removeIcon={props.removeIcon}
            onRemove={Boolean(props.removable) ? (() => {
                const newSelected: string[] = [...props.selected];
                newSelected.splice(index, 1);

                (props as any).onChange(newSelected);
            }) : undefined}
        >
            {content}
        </NeonPill>);
    });

    const options: string[] = props.options || [];

    return (<NeonBox {...boxProps(props, groupStyle.group)}>
        {pills}
        {props.addable &&
            <NeonBox margin={MARGIN.TINY} className={groupStyle.add}>
                <select
                    value="__Neon_Default_Option"
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        props.onChange &&
                        props.onChange([...props.selected, event.target.value])}
                    className={groupStyle.select}>
                    <option
                        value="__Neon_Default_Option"
                        disabled
                        hidden>
                        {props.addText || 'Add...'}
                    </option>
                    {options.filter((option: string) => !props.selected.includes(option)).map((option: string) =>
                        <option value={option} key={option} className={groupStyle.option}>{option}</option>)}
                </select>
            </NeonBox>}
    </NeonBox>);
};

export const NeonPillGroup: ThemedComponent<NeonPillGroupProps> = withConsumer<NeonPillGroupProps>(NeonPillGroupBase);
