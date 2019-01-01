/**
 * @author WMXPY
 * @namespace Neon_Common
 * @description Style
 */

import { Style } from "jss/css";

export type JSSStyle = Record<string, Style | {
    [key: string]: Style;
}>;
