/**
 * @author WMXPY
 * @namespace Neon_Common
 * @description Style
 */

import { Style } from "jss/css";
import { CSSProperties } from "react";
import { COLOR } from "./declare";

export type JSSStyle = Record<string, Style | {
    [key: string]: any;
}>;

export const mergeClasses = (...classes: Array<string | null | undefined>): string | undefined => {

    const clazz: string = classes.filter((name: string | null | undefined) => Boolean(name)).join(' ');

    if (clazz) {
        return clazz;
    }
    return;
};

export const assertIfTrue = (condition: any, name: string): string | undefined => {

    if (Boolean(condition)) {
        return name;
    }

    return;
};

export const assertIfFalse = (condition: any, name: string): string | undefined => {

    return assertIfTrue(!Boolean(condition), name);
};

export const getBorder = (color: string, width: string = '0.2rem') => ({

    borderColor: color,
    borderWidth: width,
    borderStyle: 'solid',
});

export const getBorderStyle = (width?: string) => ({

    ...getBorder(COLOR.NAVY, width),
    transition: 'border 0.2s, color 0.1s',
});

export const combineStyle = (style: CSSProperties, propsStyle?: CSSProperties): CSSProperties => {

    if (propsStyle) {
        return {
            ...style,
            ...propsStyle,
        };
    }
    return style;
};

export const migrateFocusStyle = () => ({

    '&:focus': {

        outlineColor: `rgba(77, 144, 254, .7)`,
        outlineOffset: '-0.1rem',
        outlineStyle: 'auto',
        outlineWidth: '0.2rem',
    },
});
