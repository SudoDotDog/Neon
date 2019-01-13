/**
 * @author WMXPY
 * @namespace Neon_Common_Components
 * @description Box
 */

import jss, { Classes, StyleSheet } from "jss";
import * as React from "react";
import { MARGIN } from "../../declare/index";
import { ThemedComponent, ThemeProps, withConsumer } from "../consumer";
import { JSSStyle } from "../style";

const NeonBoxStyleBase: JSSStyle = {
    tiny: {
        margin: '0.2rem',
    },
    small: {
        margin: '0.5rem',
    },
    medium: {
        margin: '1rem',
    },
    large: {
        margin: '2rem',
    },
};

const NeonBoxStyleSheet: StyleSheet = jss.createStyleSheet(NeonBoxStyleBase).attach();
const NeonBoxStyle: Classes = NeonBoxStyleSheet.classes;

export type NeonBoxProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;
    readonly margin?: MARGIN;
    readonly children?: any;
} & ThemeProps;

export const NeonBoxBase: React.SFC<NeonBoxProps> = (props: NeonBoxProps) => {

    const margin: MARGIN = props.margin || props.theme.margin;

    const marginClass: string = (() => {
        switch (margin) {
            case MARGIN.TINY: return NeonBoxStyle.tiny;
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
};

export const NeonBox: ThemedComponent<NeonBoxProps> = withConsumer<NeonBoxProps>(NeonBoxBase);
