/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Applicable
 */

import * as React from "react";
import { ThemeProps } from "../#common/consumer";
import { MARGIN } from "../declare/index";
import { INPUT_TYPE } from "./declare";

export type NeonApplicableProps = {

    readonly label?: string;
    readonly onApply?: (value: string) => void;

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly type?: INPUT_TYPE;
} & ThemeProps;

export type NeonApplicableStates = {

    readonly shrink: boolean;
};

export class NeonApplicable extends React.Component<NeonApplicableProps, NeonApplicableStates> {

    public static readonly defaultProps: Partial<NeonApplicableProps> = {

        type: INPUT_TYPE.TEXT,
    };

    public render() {

        return (<div></div>);
    }
}
