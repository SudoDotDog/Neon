/**
 * @author WMXPY
 * @namespace Neon_Paper
 * @description Button
 */

import * as React from "react";
import { NeonBox } from "../#common/components/box";
import { NeonSeparator } from "../#common/components/separator";
import { withConsumer } from "../#common/consumer";
import { MARGIN, SIZE, WIDTH } from "../declare";
import { NeonCardStyle } from "./style";

export type NeonCardProps = {

    readonly upper?: any;

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly width?: WIDTH;
    readonly size?: SIZE;
    readonly children?: any;
};

export const NeonCardBase: React.SFC<NeonCardProps> =
    (props: NeonCardProps = {
        width: WIDTH.NORMAL,
        size: SIZE.NORMAL,
    }) => {

        const classes: string[] = [
            NeonCardStyle.wrap,
        ];

        if (props.width === WIDTH.FULL) {
            classes.push(NeonCardStyle.fullWidth);
        }

        switch (props.size) {
            case SIZE.FULL: classes.push(NeonCardStyle.fullSize); break;
            case SIZE.MEDIUM: classes.push(NeonCardStyle.mediumSize); break;
            case SIZE.RELATIVE: classes.push(NeonCardStyle.relativeSize); break;
            case SIZE.NORMAL:
            default: classes.push(NeonCardStyle.normalSize);
        }

        return (<NeonBox
            style={props.style}
            className={classes.join(' ')}
            margin={props.margin}
        >

            <div className={NeonCardStyle.upper}>
                {props.upper && props.upper}
            </div>

            {props.upper && <NeonSeparator />}
            <div className={NeonCardStyle.lower}>
                {props.children}
            </div>
        </NeonBox>);
    };

export const NeonCard: React.ComponentType<NeonCardProps> = withConsumer<NeonCardProps>(NeonCardBase);
