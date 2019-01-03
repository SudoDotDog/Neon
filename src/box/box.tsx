/**
 * @author WMXPY
 * @namespace Neon_Box
 * @description Box
 */

import * as React from "react";
import { MARGIN } from "../declare";
import { NeonBoxStyle } from "./style";

export type NeonBoxProps = {

    style?: React.CSSProperties;

    className?: string;
    margin?: MARGIN;

    children?: JSX.Element | any;
};

export const NeonBox: React.SFC<NeonBoxProps> = (props: NeonBoxProps) => {

    const margin: MARGIN = props.margin || MARGIN.NONE;

    const marginClass: string = (() => {
        switch (margin) {
            case MARGIN.SMALL: return NeonBoxStyle.small;
            case MARGIN.MEDIUM: return NeonBoxStyle.medium;
            case MARGIN.LARGE: return NeonBoxStyle.large;
            case MARGIN.NONE:
            default: return '';
        }
    })();

    const className: string = props.className
        ? `${props.className} ${marginClass}`
        : marginClass;

    return (<div
        className={className}
        style={props.style}>
        {props.children}
    </div>);
};
