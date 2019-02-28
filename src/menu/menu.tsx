/**
 * @author WMXPY
 * @namespace Neon_Menu
 * @description Menu
 */

import { Classes } from "jss";
import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { SIZE } from "../declare/index";
import { NeonMenuStyle } from "./style/menu";

export type NeonMenuProps = {

    readonly size?: SIZE;

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonMenuBase: React.FC<NeonMenuProps> = (props: NeonMenuProps) => {

    const menuStyle: Classes = NeonMenuStyle.use();

    const size: SIZE = props.size || SIZE.NORMAL;

    return (<div
        className={menuStyle.menu}
    >
        {React.Children.map(props.children, (children: React.ReactElement) => {
            return React.cloneElement(children, {
                size,
                ...children.props,
            });
        })}
    </div>);
};

export const NeonMenu: ThemedComponent<NeonMenuProps> = withConsumer<NeonMenuProps>(NeonMenuBase);
