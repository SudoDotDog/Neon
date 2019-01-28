/**
 * @author WMXPY
 * @namespace Neon_Paper
 * @description Paper
 */

import * as React from "react";
import { NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { MARGIN } from "../declare";
import { NeonPaperStyle } from "./style";

export type NeonPaperProps = {

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
} & ThemeProps;

export const NeonPaperBase: React.FC<NeonPaperProps> =
    (props: NeonPaperProps) => {

        return (<NeonBox
            style={props.style}
            className={NeonPaperStyle.wrap}
            margin={props.margin}
        >
            {props.children}
        </NeonBox>);
    };

export const NeonPaper: ThemedComponent<NeonPaperProps> = withConsumer<NeonPaperProps>(NeonPaperBase);
