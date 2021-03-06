/**
 * @author WMXPY
 * @namespace Neon_Common_Style
 * @description Decorator
 */

import { Classes } from "jss";
import { CSSProperties } from "react";
import { SIZE } from "../../declare/index";
import { COLOR } from "../declare";

export type JSSStyle = Record<string, any | {
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

export const assertIfTri = (condition: any, ifTrue: string, ifFalse: string): string => {

    if (Boolean(condition)) {

        return ifTrue;
    }

    return ifFalse;
};

export const getBorder = (color: string, width: string = '0.2rem'): React.CSSProperties => ({

    borderColor: color,
    borderWidth: width,
    borderStyle: 'solid',
});

export const getBorderStyle = (width?: string): React.CSSProperties => ({

    ...getBorder(COLOR.NAVY, width),
    transition: 'all 0.2s',
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

export const getFocusStyle = (): React.CSSProperties => ({

    outlineColor: `rgba(77, 144, 254, .7)`,
    outlineOffset: '-0.1rem',
    outlineStyle: 'auto',
    outlineWidth: '0.2rem',
});

export const migrateFocusStyle = (): JSSStyle => ({

    position: 'relative',
    '&:focus': {
        ...getFocusStyle(),
        zIndex: 6,
    },
} as JSSStyle);

export const migratePureFocusStyle = (): JSSStyle => ({

    '&:focus': getFocusStyle(),
} as JSSStyle);

export const migrateActiveStyle = (): JSSStyle => ({

    '&:active': {
        ...getFocusStyle(),
        color: COLOR.NAVY,
    },
} as JSSStyle);

export const getSizeClass = (
    size: SIZE,
    normal: string,
    medium: string,
    large: string,
    full: string,
    relative: string,
): string => {

    switch (size) {
        case SIZE.MEDIUM: return medium;
        case SIZE.LARGE: return large;
        case SIZE.FULL: return full;
        case SIZE.RELATIVE: return relative;
        case SIZE.NORMAL:
        default: return normal;
    }
};

export const getDefaultSizeClass = (size: SIZE, style: Classes): string => {

    switch (size) {
        case SIZE.MEDIUM: return style.medium;
        case SIZE.LARGE: return style.large;
        case SIZE.FULL: return style.full;
        case SIZE.RELATIVE: return style.relative;
        case SIZE.NORMAL:
        default: return style.normal;
    }
};
