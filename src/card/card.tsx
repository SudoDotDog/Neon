/**
 * @author WMXPY
 * @namespace Neon_Card
 * @description Card
 */

import * as React from "react";
import { NeonBox } from "../#common/components/box";
import { NeonSeparator } from "../#common/components/separator";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { MARGIN, SIZE, WIDTH } from "../declare";
import { NeonTheme } from "../theme/index";
import { NeonCardStyle } from "./style";

export type NeonCardProps = {

    readonly upper?: any;
    readonly separator?: boolean;

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly width?: WIDTH;
    readonly size?: SIZE;
    readonly children?: any;
} & ThemeProps;

export const NeonCardBase: React.FC<NeonCardProps> =
    (props: Partial<NeonCardProps> = {
        width: WIDTH.NORMAL,
        size: SIZE.NORMAL,
    }) => {

        const theme: NeonTheme = props.theme as NeonTheme;

        const classes: string[] = [
            NeonCardStyle.wrap,
        ];

        if (props.width === WIDTH.FULL) {
            classes.push(NeonCardStyle.fullWidth);
        }

        switch (props.size) {

            case SIZE.FULL: classes.push(NeonCardStyle.fullSize); break;
            case SIZE.LARGE: classes.push(NeonCardStyle.largeSize); break;
            case SIZE.MEDIUM: classes.push(NeonCardStyle.mediumSize); break;
            case SIZE.RELATIVE: classes.push(NeonCardStyle.relativeSize); break;
            case SIZE.NORMAL:
            default: classes.push(NeonCardStyle.normalSize);
        }

        const hasSeparator: boolean =
            (props.separator === undefined)
                ? theme.separator
                : props.separator;

        return (<NeonBox
            style={props.style}
            className={classes.join(' ')}
            margin={props.margin}
        >

            <div className={NeonCardStyle.upper}>
                {props.upper && props.upper}
            </div>

            {(props.upper && hasSeparator) && <NeonSeparator />}
            <div className={NeonCardStyle.lower}>
                {props.children}
            </div>
        </NeonBox>);
    };

export const NeonCard: ThemedComponent<NeonCardProps> = withConsumer<NeonCardProps>(NeonCardBase);
