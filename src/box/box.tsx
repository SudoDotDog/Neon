/**
 * @author WMXPY
 * @namespace Neon_Box
 * @description Box
 */

import * as React from "react";
import { MARGIN } from "../declare";
import { NeonTheme, NeonThemeConsumer } from "../theme";
import { NeonBoxStyle } from "./style";

export type NeonBoxProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;
    readonly margin?: MARGIN;
    readonly children?: any;
};

export const NeonBox: React.SFC<NeonBoxProps> = (props: NeonBoxProps) => {

    return React.createElement(NeonThemeConsumer, {} as any, (theme: NeonTheme) => {

        const margin: MARGIN = props.margin || theme.margin;

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

        return React.createElement('div', {
            className,
            style: props.style,
        }, props.children);
    });
};
