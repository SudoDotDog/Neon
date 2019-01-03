/**
 * @author WMXPY
 * @namespace Neon_Common
 * @description Register
 */

import jss from "jss";
import jssPresetDefault from "jss-preset-default";
import { COLOR } from "./declare";

export class NeonRegister {

    public static register(): void {

        if (!this._instance) {
            this._instance = new NeonRegister();

            jss.setup(jssPresetDefault());

            jss.createStyleSheet({
                '@global': {
                    '::-webkit-scrollbar': {
                        width: '0.5em',
                        height: '0.5em',
                    },
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: COLOR.NAVY,
                    },
                    '::-webkit-scrollbar-track': {
                        backgroundColor: COLOR.GRAY,
                    },
                },
            }).attach();
        }

        return;
    }

    private static _instance: NeonRegister;

    private constructor() {

    }
}
