/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Indicator
 */

import * as React from "react";
import { NeonBox } from "../#common/box/box";
import { NeonSpinner } from "./spinner";
import { NeonIndicatorStyle } from "./style";

export type NeonIndicatorProps = {

    readonly loading: boolean;

    readonly children?: any;
};

export const NeonIndicator: React.SFC<NeonIndicatorProps> = (props: NeonIndicatorProps) => {

    const classes: string[] = [
        NeonIndicatorStyle.wrap,
        props.loading ? NeonIndicatorStyle.invisible : NeonIndicatorStyle.visible,
    ];

    return (<NeonBox className={NeonIndicatorStyle.box}>
        <div className={classes.join(' ')} >
            {props.children}
        </div>
        <div className={NeonIndicatorStyle.spinner}>
            <NeonSpinner loading={props.loading} />
        </div>
    </NeonBox>);
};
