/**
 * @author WMXPY
 * @namespace Neon_Common_Style
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { JSSStyle } from "./decorator";

export class NeonStyle {

    public static create(base: JSSStyle) {

        return new NeonStyle(base);
    }

    private readonly _base: JSSStyle;
    private _sheet: StyleSheet | null;

    private constructor(base: JSSStyle) {

        this._base = base;
        this._sheet = null;
    }

    public use(): Classes {

        const sheet: StyleSheet = this._getAttached();
        return sheet.classes;
    }

    private _getAttached(): StyleSheet {

        if (this._sheet) {
            return this._sheet;
        }

        this._sheet = jss.createStyleSheet(this._base).attach();
        return this._sheet;
    }
}
