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
