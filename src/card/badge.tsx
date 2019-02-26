/**
 * @author WMXPY
 * @namespace Neon_Card
 * @description Card
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps } from "../#common/components/box";
import { NeonSeparator } from "../#common/components/separator";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { SIZE, WIDTH } from "../declare";
import { NeonTheme } from "../theme/index";
import { NeonCard, NeonCardCut } from "./card";
import { NeonBadgeStyle } from "./style/badge";

export type NeonBadgeProps = {

    readonly upper?: any;
    readonly separator?: boolean;
} & NeonCardCut & ThemeProps & BoxProps;

export const NeonBadgeBase: React.FC<NeonBadgeProps> =
    (props: Partial<NeonBadgeProps> = {
        width: WIDTH.NORMAL,
        size: SIZE.NORMAL,
    }) => {

        const theme: NeonTheme = props.theme as NeonTheme;
        const badgeStyle: Classes = NeonBadgeStyle.use();

        const hasSeparator: boolean =
            (props.separator === undefined)
                ? theme.separator
                : props.separator;

        return (<NeonCard
            {...boxProps(props)}
            width={props.width}
            size={props.size}
        >

            <div className={badgeStyle.upper}>
                {props.upper && props.upper}
            </div>

            {(props.upper && hasSeparator) && <NeonSeparator />}
            <div className={badgeStyle.lower}>
                {props.children}
            </div>
        </NeonCard>);
    };

export const NeonBadge: ThemedComponent<NeonBadgeProps> = withConsumer<NeonBadgeProps>(NeonBadgeBase);
