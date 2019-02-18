/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { JSSStyle } from "../#common/style";

const NeonNavigationStyleBase: JSSStyle = {

};

export const NeonNavigationStyleSheet: StyleSheet = jss.createStyleSheet(NeonNavigationStyleBase).attach();
export const NeonNavigationStyle: Classes = NeonNavigationStyleSheet.classes;
