/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Button
 */

import jss, { StyleSheet } from "jss";
import * as React from "react";
import { NeonButtonStyle } from "./style";

export type NeonButtonProps = {

    onClick: () => void;
    children: JSX.Element;
};

const { classes }: StyleSheet = jss.createStyleSheet(NeonButtonStyle).attach();

export const NeonButton: React.SFC<NeonButtonProps> =
    (props: NeonButtonProps) => {

        return (<button
            className={classes.button}
            onClick={props.onClick}>
            {props.children}
        </button>);
    };
