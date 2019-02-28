/**
 * @author WMXPY
 * @namespace Neon_Menu
 * @description Menu Item
 */

import * as React from "react";
import { boxProps } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { NeonShine } from "../button/shine";
import { SIZE } from "../declare/index";

export type NeonMenuItemProps = {

    readonly size?: SIZE;
    readonly onClick?: () => void;
    readonly disabled?: boolean;
    readonly children?: any;
} & BoxProps;

export const NeonMenuItem: React.FC<NeonMenuItemProps> = (props: NeonMenuItemProps) => {

    return (<NeonShine
        size={props.size}
        disabled={props.disabled}
        onClick={props.onClick}
        {...boxProps(props)}
    >
        {props.children}
    </NeonShine>);
};
