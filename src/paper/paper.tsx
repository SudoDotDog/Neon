/**
 * @author WMXPY
 * @namespace Neon_Paper
 * @description Button
 */

import * as React from "react";
import { NeonPaperStyle } from "./style";

export type NeonPaperProps = {

    children?: JSX.Element;
};

export const NeonPaper: React.SFC<NeonPaperProps> =
    (props: NeonPaperProps) => {

        return (<div className={NeonPaperStyle.wrap}>
            {props.children}
        </div>);
    };
