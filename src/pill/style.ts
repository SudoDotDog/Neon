/**
 * @author WMXPY
 * @namespace Neon_Pill
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { JSSStyle } from "../#common/style";

const NeonPillStyleBase: JSSStyle = {

    wrap: {

    },
};

export const NeonPillStyleSheet: StyleSheet = jss.createStyleSheet(NeonPillStyleBase).attach();
export const NeonPillStyle: Classes = NeonPillStyleSheet.classes;
