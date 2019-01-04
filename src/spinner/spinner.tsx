/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Spinner
 */

import * as React from "react";
import { NeonSpinnerStyle } from "./style";

export type NeonSpinnerProps = {

    loading: boolean;
};

export const NeonSpinner: React.SFC<NeonSpinnerProps> = (props: NeonSpinnerProps) => {

    console.log(NeonSpinnerStyle);

    const outerClass: string = NeonSpinnerStyle.outer;
    const frontClass: string = `${NeonSpinnerStyle.front} ${props.loading ? NeonSpinnerStyle.enableFront : NeonSpinnerStyle.disable}`;
    const backClass: string = `${NeonSpinnerStyle.back} ${props.loading ? NeonSpinnerStyle.enableBack : NeonSpinnerStyle.disable}`;

    return (<div className={NeonSpinnerStyle.loading}>
        <div className={outerClass} >
            <div className={frontClass} />
            <div className={backClass} />
        </div>
    </div>);
};
