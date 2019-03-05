/**
 * @author WMXPY
 * @namespace Neon_Common_Components
 * @description Box
 */

import { Classes } from "jss";
import * as React from "react";
import { MARGIN } from "../../declare/index";
import { ExcludeTheme, ThemedComponent, ThemeProps, withConsumer } from "../consumer";
import { BoxProps } from "../declare";
import { assertIfTrue, JSSStyle, mergeClasses } from "../style/decorator";
import { NeonStyle } from "../style/style";

const NeonBoxStyleBase: JSSStyle = {

    fit: {
        width: 'fit-content',
    },

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

    tinyRift: {
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
    },
    smallRift: {
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    },
    mediumRift: {
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    largeRift: {
        marginTop: '2rem',
        marginBottom: '2rem',
    },
};

const NeonBoxStyle: NeonStyle = NeonStyle.create(NeonBoxStyleBase, 'Box');

export const boxProps = (props: BoxProps, ...extraClasses: Array<string | null | undefined>): ExcludeTheme<NeonBoxProps> => ({
    style: props.style,
    margin: props.margin,
    rift: props.rift,
    className: mergeClasses(props.className, ...extraClasses),
    ignoreTheme: props.ignoreTheme,
});

export type NeonBoxProps = {

    readonly divAttributes?: React.HTMLAttributes<HTMLDivElement>;
    readonly fitContent?: boolean;
    readonly children?: any;
} & BoxProps & ThemeProps;

export const NeonBoxBase: React.FC<NeonBoxProps> = (props: NeonBoxProps) => {

    const boxStyle: Classes = NeonBoxStyle.use();

    const margin: MARGIN = ((): MARGIN => {

        if (props.ignoreTheme) {
            return props.margin || MARGIN.NONE;
        }

        return props.margin || props.theme.margin;
    })();

    const rift: MARGIN = ((): MARGIN => {

        if (props.ignoreTheme) {
            return props.rift || MARGIN.NONE;
        }

        return props.rift || props.theme.rift;
    })();

    const marginClass: string = (() => {
        switch (margin) {
            case MARGIN.TINY: return boxStyle.tiny;
            case MARGIN.SMALL: return boxStyle.small;
            case MARGIN.MEDIUM: return boxStyle.medium;
            case MARGIN.LARGE: return boxStyle.large;
            case MARGIN.NONE:
            default: return '';
        }
    })();

    const riftClass: string = (() => {
        switch (rift) {
            case MARGIN.TINY: return boxStyle.tinyRift;
            case MARGIN.SMALL: return boxStyle.smallRift;
            case MARGIN.MEDIUM: return boxStyle.mediumRift;
            case MARGIN.LARGE: return boxStyle.largeRift;
            case MARGIN.NONE:
            default: return '';
        }
    })();

    return React.createElement('div', {
        ...props.divAttributes,
        className: mergeClasses(
            marginClass,
            riftClass,
            props.className,
            assertIfTrue(props.fitContent, boxStyle.fit),
        ),
        style: props.style,
    }, props.children);
};

export const NeonBox: ThemedComponent<NeonBoxProps> = withConsumer<NeonBoxProps>(NeonBoxBase);
