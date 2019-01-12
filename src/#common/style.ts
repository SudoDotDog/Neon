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

export const getBorder = (color: string, width: string = '0.2rem') => ({

    borderColor: color,
    borderWidth: width,
    borderStyle: 'solid',
});

export const getBorderStyle = (width?: string) => ({

    ...getBorder(COLOR.NAVY, width),
    transition: '0.2s all',
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
