/**
 * @author WMXPY
 * @namespace Neon_Flag
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { JSSStyle } from "../common/style";

const NeonFlagStyleBase: JSSStyle = {

    flag: {

    },
};

export const NeonFlagStyleSheet: StyleSheet = jss.createStyleSheet(NeonFlagStyleBase).attach();
export const NeonFlagStyle: Classes = NeonFlagStyleSheet.classes;
