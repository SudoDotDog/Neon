/**
 * @author WMXPY
 * @namespace Neon_Common_Components
 * @description Box
 */

import jss, { Classes, StyleSheet } from "jss";
import * as React from "react";
import { MARGIN } from "../../declare/index";
import { NeonTheme, NeonThemeConsumer } from "../../theme/index";
import { JSSStyle } from "../style";

const NeonBoxStyleBase: JSSStyle = {

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
