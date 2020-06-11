/**
 * @author WMXPY
 * @namespace Neon_Common
 * @description Register
 */

import jss from "jss";
import jssPresetDefault from "jss-preset-default";
import { COLOR } from "./declare";
import { JSSStyle } from "./style/decorator";

export class NeonRegister {

    private static _instance: NeonRegister;

    public static register(): void {

        if (!this._instance) {
            this._instance = new NeonRegister();

            jss.setup(jssPresetDefault());

            const globalStyleBase: JSSStyle = {
                '@global': {
                    '::-webkit-scrollbar': {
                        width: '0.5em',
                        height: '0.5em',
                    },
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: COLOR.NAVY,
                    },
                    '::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: COLOR.BLACK,
                    },
                    '::-webkit-scrollbar-track': {
                        backgroundColor: COLOR.GRAY,
                    },
                },
            };
            jss.createStyleSheet(globalStyleBase, {
                meta: 'NeonGlobal',
            }).attach();
        }

        return;
    }
}
