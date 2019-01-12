/**
 * @author WMXPY
 * @namespace Neon_Common_Components
 * @description Separator
 */

import jss, { Classes, StyleSheet } from "jss";
import * as React from "react";
import { COLOR } from "../declare";
import { JSSStyle } from "../style";

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

export const NeonSeparator: React.SFC<{}> = () => {

    return <div className={NeonSeparatorStyle.separator} />;
};
