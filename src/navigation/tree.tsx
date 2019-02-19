/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Tree
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTrue } from "../#common/style";
import { NeonShine } from "../button/shine";
import { NeonNavigationStyle } from "./style";

export type TreeRoute = {

    text: string;
    onClick?: () => void;
    key?: string;
};

export type NeonTreeProps = {

    tree: TreeRoute[];
    selected?: string;
} & BoxProps & ThemeProps;

export const NeonTreeBase: React.FC<NeonTreeProps> =
    (props: NeonTreeProps) => {

        return (<NeonBox {...boxProps(props)}>
            {props.tree.map((route: TreeRoute, index: number) => {

                const key: string = route.key || index.toString();

                return (<NeonShine
                    buttonClassName={assertIfTrue(
                        props.selected === key,
                        NeonNavigationStyle.treeSelected,
                    )}
                    onClick={route.onClick}
                    key={key}
                >
                    {route.text}
                </NeonShine>);
            })}
        </NeonBox>);
    };

export const NeonTree: ThemedComponent<NeonTreeProps> = withConsumer<NeonTreeProps>(NeonTreeBase);
