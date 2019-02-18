/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Navigation
 */

import * as React from "react";
import { NeonNavigationStyle } from "./style";

export type NeonNavigationProps = {
};

export const NeonNavigation: React.FC<NeonNavigationProps> =
    (props: NeonNavigationProps) => {

        return (<div className={NeonNavigationStyle.box}></div>);
    };
