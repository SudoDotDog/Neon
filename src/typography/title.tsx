/**
 * @author WMXPY
 * @namespace Neon_Typography
 * @description Button
 */

import * as React from "react";
import { NeonBox } from "../box/box";
import { MARGIN } from "../declare/index";
import { NeonTypographyStyle } from "./style";

export type NeonTitleProps = {

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
};

export const NeonTitle: React.SFC<NeonTitleProps> =
    (props: NeonTitleProps) => {

        const classes: string[] = [
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
