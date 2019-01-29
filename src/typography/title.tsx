/**
 * @author WMXPY
 * @namespace Neon_Typography
 * @description Button
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfFalse, mergeClasses } from "../#common/style";
import { ALIGN, SIZE } from "../declare";
import { getAlignClass, NeonTypographyStyle } from "./style";

export type NeonTitleProps = {

    readonly align?: ALIGN;
    readonly size?: SIZE;

    readonly removeBorder?: boolean;

    readonly children?: any;
} & ThemeProps & BoxProps;

const getSizeClass = (size: SIZE) => {

    switch (size) {

        case SIZE.MEDIUM: return NeonTypographyStyle.medium;
        case SIZE.NORMAL: return NeonTypographyStyle.small;
        case SIZE.FULL:
        case SIZE.LARGE:
        default: return NeonTypographyStyle.large;
    }
};

export const NeonTitleBase: React.FC<NeonTitleProps> =
    (props: NeonTitleProps) => {

        return (<NeonBox {...boxProps(props, mergeClasses(
            getAlignClass(props.align || ALIGN.LEFT),
            getSizeClass(props.size || SIZE.LARGE),
            NeonTypographyStyle.bold,
            NeonTypographyStyle.dye,
            NeonTypographyStyle.tag,
            assertIfFalse(props.removeBorder, NeonTypographyStyle.sign),
        ))}>{props.children}</NeonBox>);
    };

export const NeonTitle: ThemedComponent<NeonTitleProps> = withConsumer<NeonTitleProps>(NeonTitleBase);
