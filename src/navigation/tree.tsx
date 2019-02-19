/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Tree
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";

export type TreeRoute = {

    text: string;
    onClick?: () => void;
    key?: string;
    children?: TreeRoute[];
};

export type NeonTreeProps = {

    tree: TreeRoute[];
} & BoxProps & ThemeProps;

export const NeonTreeBase: React.FC<NeonTreeProps> =
    (props: NeonTreeProps) => {

        return (<NeonBox {...boxProps(props)}>
            123
        </NeonBox>);
    };

export const NeonTree: ThemedComponent<NeonTreeProps> = withConsumer<NeonTreeProps>(NeonTreeBase);
