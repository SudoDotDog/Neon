/**
 * @author WMXPY
 * @namespace Neon_Menu
 * @description Menu
 */

import { Classes } from "jss";
import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonMenuStyle } from "./style/menu";

export type NeonMenuProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonMenuBase: React.FC<NeonMenuProps> = (props: NeonMenuProps) => {

    const menuStyle: Classes = NeonMenuStyle.use();

    return (<div className={menuStyle.menu}>
        {props.children}
    </div>);
};

export const NeonMenu: ThemedComponent<NeonMenuProps> = withConsumer<NeonMenuProps>(NeonMenuBase);
