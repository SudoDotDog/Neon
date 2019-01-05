/**
 * @author WMXPY
 * @namespace Neon_Flag
 * @description Flag
 */

import * as React from "react";
import { NeonBox } from "../box/box";
import { MARGIN } from "../declare/index";
import { NeonFlagStyle } from "./style";

export type NeonFlagProps = {

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
};

export const NeonFlag: React.SFC<NeonFlagProps> = (props: NeonFlagProps) => {

    return (<NeonBox
        margin={props.margin}
        className={NeonFlagStyle.flag}
        style={props.style}>
        {props.children}
    </NeonBox>);
};
