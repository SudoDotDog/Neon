/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Tree
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { BoxProps } from "../#common/declare";

export type TreeRoute = {

    text: string;
    onClick?: () => void;
    key?: string;
    children?: TreeRoute[];
};

export type NeonTreeProps = {

    tree: TreeRoute[];
} & BoxProps;

export const NeonTree: React.FC<NeonTreeProps> =
    (props: NeonTreeProps) => {

        return (<NeonBox {...boxProps(props)}>
            123
        </NeonBox>);
    };
