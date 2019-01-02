/**
 * @author WMXPY
 * @namespace Neon_Paper
 * @description Button
 */

import jss, { StyleSheet } from "jss";
import * as React from "react";
import { NeonPaperStyle } from "./style";

export type NeonPaperProps = {

    onClick: () => void;
    children?: JSX.Element;
};

const { classes }: StyleSheet = jss.createStyleSheet(NeonPaperStyle).attach();

export const NeonPaper: React.SFC<NeonPaperProps> =
    (props: NeonPaperProps) => {

        return (<div className={classes.wrap}></div>);
    };
