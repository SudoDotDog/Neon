/**
 * @author WMXPY
 * @namespace Neon_Typography
 * @description Button
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfFalse, mergeClasses } from "../#common/style/decorator";
import { ALIGN, SIZE } from "../declare";
import { getAlignClass, NeonTypographyStyle } from "./style/title";

export type NeonTitleProps = {

    readonly align?: ALIGN;
    readonly size?: SIZE;

    readonly removeBorder?: boolean;

    readonly children?: any;
} & ThemeProps & BoxProps;

const getSizeClass = (style: Classes, size: SIZE) => {

    switch (size) {

        case SIZE.MEDIUM: return style.medium;
        case SIZE.NORMAL: return style.small;
        case SIZE.FULL:
        case SIZE.LARGE:
        default: return style.large;
    }
};

export const NeonTitleBase: React.FC<NeonTitleProps> =
    (props: NeonTitleProps) => {

        const typographyStyle: Classes = NeonTypographyStyle.use();

        return (<NeonBox {...boxProps(props, mergeClasses(
            getAlignClass(typographyStyle, props.align || ALIGN.LEFT),
            getSizeClass(typographyStyle, props.size || SIZE.LARGE),
            typographyStyle.bold,
            typographyStyle.dye,
            typographyStyle.tag,
            assertIfFalse(props.removeBorder, typographyStyle.sign),
        ))}>{props.children}</NeonBox>);
    };

export const NeonTitle: ThemedComponent<NeonTitleProps> = withConsumer<NeonTitleProps>(NeonTitleBase);
