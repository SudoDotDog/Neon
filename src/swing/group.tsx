/**
 * @author WMXPY
 * @namespace Neon_Swing
 * @description Button Group
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonButton } from "../button/index";
import { MARGIN, SIZE } from "../declare/index";
import { NeonButtonGroupStyle } from "./style/group";

export type NeonButtonGroupElement = {

    readonly text: string;
    readonly key?: string;
    readonly onClick?: () => void;
};

export type NeonButtonGroupProps = {

    readonly buttons: NeonButtonGroupElement[];

    readonly size?: SIZE;
} & ThemeProps & BoxProps;

export const NeonButtonGroupBase: React.FC<NeonButtonGroupProps> = (props: NeonButtonGroupProps) => {

    const buttonGroupStyle: Classes = NeonButtonGroupStyle.use();

    return (<NeonBox
        {...boxProps(
            props,
            buttonGroupStyle.box,
        )}
    >
        {props.buttons.map((element: NeonButtonGroupElement, index: number) => {

            const key: string = element.key || index.toString();

            return (<NeonButton
                ignoreTheme
                key={key}
                size={props.size}
                margin={MARGIN.TINY}
                className={buttonGroupStyle.button}
                onClick={element.onClick}
            >
                {element.text}
            </NeonButton>);
        })}
    </NeonBox>);
};

export const NeonButtonGroup: ThemedComponent<NeonButtonGroupProps> = withConsumer<NeonButtonGroupProps>(NeonButtonGroupBase);
