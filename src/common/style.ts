/**
 * @author WMXPY
 * @namespace Neon_Common
 * @description Style
 */

import { Style } from "jss/css";
import { COLOR } from "./declare";

export type JSSStyle = Record<string, Style | {
    [key: string]: Style;
}>;

export const getBorder = (color: string, width: string = '0.2rem') => ({

    borderColor: color,
    borderWidth: width,
    borderStyle: 'solid',
});

export const getBorderHoverStyle = () => ({

    ...getBorder(COLOR.NAVY),
    transition: '0.2s all',
});
