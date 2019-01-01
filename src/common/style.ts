/**
 * @author WMXPY
 * @namespace Neon_Common
 * @description Style
 */

import { Style } from "jss/css";
import { COLOR } from "./color";

export type JSSStyle = Record<string, Style | {
    [key: string]: Style;
}>;

export const getBorder = (color: string) => ({

    border: `0.2rem solid ${color}`,
});

export const getBorderHoverStyle = () => ({

    ...getBorder(COLOR.NAVY),
    transition: '0.2s all',

    '&:hover': {
        ...getBorder(COLOR.DARKGRAY),
    },
});
