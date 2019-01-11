/**
 * @author WMXPY
 * @namespace Neon_Typography
 * @description Button
 */

import * as React from "react";
import { NeonBox } from "../box";
import { ALIGN, MARGIN } from "../declare";
import { getAlignClass, NeonTypographyStyle, NeonTypographySubStyle } from "./style";

export type NeonSubProps = {

    readonly align?: ALIGN,
    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;

    readonly href?: string;
};

const renderSubTag = (children: any, href?: string) => {

    if (href) {
        const classes: string[] = [
            NeonTypographySubStyle.link,
            NeonTypographyStyle.dye,
        ];

        return (<a href={href} className={classes.join(' ')}>{children}</a>);
    }

    return <span>{children}</span>;
};

export const NeonSub: React.SFC<NeonSubProps> =
    (props: NeonSubProps) => {

        const classes: string[] = [
            getAlignClass(props.align || ALIGN.LEFT),
            NeonTypographyStyle.small,
            NeonTypographyStyle.dye,
        ];

        return (<NeonBox
            style={props.style}
            margin={props.margin}
            className={classes.join(' ')}
        >
            {renderSubTag(props.children, props.href)}
        </NeonBox>);
    };
