/**
 * @author WMXPY
 * @namespace Neon_Common_Components
 * @description Separator
 */

import jss, { Classes, StyleSheet } from "jss";
import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../consumer";
import { COLOR } from "../declare";
import { JSSStyle } from "../style/decorator";

const NeonSeparatorStyleBase: JSSStyle = {

    separator: {

        marginTop: '0.1rem',
        marginBottom: '0.1rem',

        height: '0.1rem',
        backgroundColor: COLOR.GRAY,
    },
};

const NeonSeparatorStyleSheet: StyleSheet = jss.createStyleSheet(NeonSeparatorStyleBase).attach();
const NeonSeparatorStyle: Classes = NeonSeparatorStyleSheet.classes;

export type NeonSeparatorProps = {} & ThemeProps;

export const NeonSeparatorBase: React.FC<NeonSeparatorProps> = () => {

    return <div className={NeonSeparatorStyle.separator} />;
};

export const NeonSeparator: ThemedComponent<NeonSeparatorProps> = withConsumer<NeonSeparatorProps>(NeonSeparatorBase);
