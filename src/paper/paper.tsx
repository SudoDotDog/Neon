/**
 * @author WMXPY
 * @namespace Neon_Paper
 * @description Button
 */

import * as React from "react";
import { NeonPaperStyle } from "./style";

export type NeonPaperProps = {

    readonly style?: React.CSSProperties;
    readonly children?: any;
};

export const NeonPaper: React.SFC<NeonPaperProps> =
    (props: NeonPaperProps) => {

        return (<div
            style={props.style}
            className={NeonPaperStyle.wrap}
        >
            {props.children}
        </div>);
    };
