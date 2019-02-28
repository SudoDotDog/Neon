/**
 * @author WMXPY
 * @namespace Neon_Menu
 * @description Context Menu
 */

import { Classes } from "jss";
import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { SIZE } from "../declare/index";
import { NeonContextMenuStyle } from "./style/context";

export type NeonContextMenuProps = {

    readonly size?: SIZE;

    readonly children?: any;
} & ThemeProps & BoxProps;

export type NeonContextMenuStates = {

    readonly triggered: boolean;
};

export class NeonContextMenuBase extends React.Component<NeonContextMenuProps, NeonContextMenuStates> {

    public readonly state: NeonContextMenuStates = {

        triggered: false,
    };

    private _contextMenuStyle: Classes = NeonContextMenuStyle.use();

    public render(): React.ReactNode {

        return <div className={this._contextMenuStyle.wrap}></div>;
    }
}

export const NeonMenu: ThemedComponent<NeonContextMenuProps> = withConsumer<NeonContextMenuProps>(NeonContextMenuBase);
