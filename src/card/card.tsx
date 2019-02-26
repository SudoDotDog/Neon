/**
 * @author WMXPY
 * @namespace Neon_Card
 * @description Card
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { SIZE, WIDTH } from "../declare";
import { NeonCardStyle } from "./style/card";

export type NeonCardCut = {

    readonly width?: WIDTH;
    readonly size?: SIZE;

    readonly children?: any;
};

export type NeonCardProps = NeonCardCut & ThemeProps & BoxProps;

export const NeonCardBase: React.FC<NeonCardProps> =
    (props: Partial<NeonCardProps> = {
        width: WIDTH.NORMAL,
        size: SIZE.NORMAL,
    }) => {

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

        return (<NeonBox {...boxProps(
            props,
            mergeClasses(...classes),
        )}
        >
            {props.children}
        </NeonBox>);
    };

export const NeonCard: ThemedComponent<NeonCardProps> = withConsumer<NeonCardProps>(NeonCardBase);
