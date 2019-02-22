/**
 * @author WMXPY
 * @namespace Neon_Card
 * @description Card
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { NeonSeparator } from "../#common/components/separator";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { SIZE, WIDTH } from "../declare";
import { NeonTheme } from "../theme/index";
import { NeonCardStyle } from "./style/card";

export type NeonCardProps = {

    readonly upper?: any;
    readonly separator?: boolean;

    readonly width?: WIDTH;
    readonly size?: SIZE;
    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonCardBase: React.FC<NeonCardProps> =
    (props: Partial<NeonCardProps> = {
        width: WIDTH.NORMAL,
        size: SIZE.NORMAL,
    }) => {

        const theme: NeonTheme = props.theme as NeonTheme;
        const cardStyle: Classes = NeonCardStyle.use();

        const classes: string[] = [
            cardStyle.wrap,
        ];

        if (props.width === WIDTH.FULL) {
            classes.push(cardStyle.fullWidth);
        }

        switch (props.size) {

            case SIZE.FULL: classes.push(cardStyle.fullSize); break;
            case SIZE.LARGE: classes.push(cardStyle.largeSize); break;
            case SIZE.MEDIUM: classes.push(cardStyle.mediumSize); break;
            case SIZE.RELATIVE: classes.push(cardStyle.relativeSize); break;
            case SIZE.NORMAL:
            default: classes.push(cardStyle.normalSize);
        }

        const hasSeparator: boolean =
            (props.separator === undefined)
                ? theme.separator
                : props.separator;

        return (<NeonBox {...boxProps(props, mergeClasses(...classes))}>

            <div className={cardStyle.upper}>
                {props.upper && props.upper}
            </div>

            {(props.upper && hasSeparator) && <NeonSeparator />}
            <div className={cardStyle.lower}>
                {props.children}
            </div>
        </NeonBox>);
    };

export const NeonCard: ThemedComponent<NeonCardProps> = withConsumer<NeonCardProps>(NeonCardBase);
