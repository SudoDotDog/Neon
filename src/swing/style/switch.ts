/**
 * @author WMXPY
 * @namespace Neon_Swing_Style
 * @description Switch
 */

import jss, { Classes, StyleSheet } from "jss";
import { JSSStyle } from "../../#common/style/decorator";

const NeonSwitchStyleBase: JSSStyle = {

    wrap: {
    },
};

export const NeonSwitchStyleSheet: StyleSheet = jss.createStyleSheet(NeonSwitchStyleBase).attach();
export const NeonSwitchStyle: Classes = NeonSwitchStyleSheet.classes;
