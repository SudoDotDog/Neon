/**
 * @author WMXPY
 * @namespace Neon_Menu
 * @description Menu
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfFalse } from "../#common/style/decorator";
import { SIZE } from "../declare/index";
import { NeonMenuStyle } from "./style/menu";

export type NeonMenuProps = {

    readonly size?: SIZE;
    readonly reverse?: boolean;
    readonly borderless?: boolean;

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonMenuBase: React.FC<NeonMenuProps> = (props: NeonMenuProps) => {

    const menuStyle: Classes = NeonMenuStyle.use();

    const size: SIZE = props.size || SIZE.NORMAL;
    const reverse: boolean = props.reverse || false;

    return (<NeonBox
        {...boxProps(
            props,
            menuStyle.menu,
            assertIfFalse(props.borderless, menuStyle.bordered),
        )}
    >
        {React.Children.map(props.children, (children: React.ReactElement) => {
            return React.cloneElement(children, {
                size,
                reverse,
                ...children.props,
            });
        })}
    </NeonBox>);
};

export const NeonMenu: ThemedComponent<NeonMenuProps> = withConsumer<NeonMenuProps>(NeonMenuBase);
