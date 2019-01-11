/**
 * @author WMXPY
 * @namespace Neon_Typography
 * @description Button
 */

import * as React from "react";
import { NeonBox } from "../box/box";
import { MARGIN } from "../declare/index";
import { NeonTypographyStyle } from "./style";

export type NeonSubProps = {

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;

    readonly tag?: string;
    readonly tagProps?: any;
};

const createSubTag = (tag: string, tagProps: any, children: any):
    React.DOMElement<any, any> =>
    React.createElement(
        tag,
        tagProps,
        children,
    );

export const NeonSub: React.SFC<NeonSubProps> =
    (props: NeonSubProps) => {

        const classes: string[] = [
            NeonTypographyStyle.small,
            NeonTypographyStyle.dye,
        ];

        return (<NeonBox
            style={props.style}
            margin={props.margin}
            className={classes.join(' ')}
        >
            {createSubTag(
                props.tag || 'span',
                props.tagProps || {},
                props.children,
            )}
        </NeonBox>);
    };
