/**
 * @author WMXPY
 * @namespace Neon_Paper
 * @description Button
 */

import * as React from "react";
import { NeonBox } from "../#common/box/box";
import { MARGIN } from "../declare";
import { NeonPaperStyle } from "./style";

export type NeonPaperProps = {

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
};

export const NeonPaper: React.SFC<NeonPaperProps> =
    (props: NeonPaperProps) => {

        return (<NeonBox
            style={props.style}
            className={NeonPaperStyle.wrap}
            margin={props.margin}
        >
            {props.children}
        </NeonBox>);
    };
