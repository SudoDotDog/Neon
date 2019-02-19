/**
 * @author WMXPY
 * @namespace Neon_Swing
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { JSSStyle } from "../#common/style";

const NeonSwitchStyleBase: JSSStyle = {

    wrap: {
    },
};

export const NeonSwitchStyleSheet: StyleSheet = jss.createStyleSheet(NeonSwitchStyleBase).attach();
export const NeonSwitchStyle: Classes = NeonSwitchStyleSheet.classes;
