/**
 * @author WMXPY
 * @namespace Neon_Flag
 * @description Flag
 */

import * as React from "react";
import { NeonBox } from "../box/box";
import { MARGIN } from "../declare/index";
import { FLAG_TYPE } from "./declare";
import { NeonFlagStyle } from "./style";

export type NeonFlagProps = {

    readonly type: FLAG_TYPE;

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
};

export const NeonFlag: React.SFC<NeonFlagProps> = (props: NeonFlagProps) => {

    const flagClass: string = (() => {
        switch (props.type) {
            case FLAG_TYPE.ERROR: return NeonFlagStyle.error;
            case FLAG_TYPE.WARNING:
            default: return NeonFlagStyle.warning;
        }
    })();

    const classes: string = [
        NeonFlagStyle.flag,
        flagClass,
    ].join(' ');

    return (<NeonBox
        margin={props.margin}
        className={classes}
        style={props.style}>
        {props.children}
    </NeonBox>);
};
