/**
 * @author WMXPY
 * @namespace Neon_Box
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { JSSStyle } from "../style";

const NeonBoxStyleBase: JSSStyle = {

    small: {

        margin: '0.5rem',
    },
    medium: {

        margin: '1rem',
    },
    large: {

        margin: '2rem',
    },
};

export const NeonBoxStyleSheet: StyleSheet = jss.createStyleSheet(NeonBoxStyleBase).attach();
export const NeonBoxStyle: Classes = NeonBoxStyleSheet.classes;
