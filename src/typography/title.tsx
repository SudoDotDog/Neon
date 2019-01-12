/**
 * @author WMXPY
 * @namespace Neon_Typography
 * @description Button
 */

import * as React from "react";
import { NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { ALIGN, MARGIN } from "../declare";
import { getAlignClass, NeonTypographyStyle } from "./style";

export type NeonTitleProps = {

    readonly align?: ALIGN;
    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
} & ThemeProps;

export const NeonTitleBase: React.SFC<NeonTitleProps> =
    (props: NeonTitleProps) => {

        const classes: string[] = [
            getAlignClass(props.align || ALIGN.LEFT),
            NeonTypographyStyle.large,
            NeonTypographyStyle.bold,
            NeonTypographyStyle.dye,
            NeonTypographyStyle.tag,
        ];

        return (<NeonBox
            style={props.style}
            margin={props.margin}
            className={classes.join(' ')}
        >
            {props.children}
        </NeonBox>);
    };

export const NeonTitle: ThemedComponent<NeonTitleProps> = withConsumer<NeonTitleProps>(NeonTitleBase);
