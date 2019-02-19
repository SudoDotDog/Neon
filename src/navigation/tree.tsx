/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Tree
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { NeonShine } from "../button/shine";
import { SIZE } from "../declare/index";
import { NeonNavigationStyle } from "./style";

export type TreeRoute = {

    text: string;
    onClick?: () => void;
    key?: string;
};

export type NeonTreeProps = {

    tree: TreeRoute[];

    buttonClassName?: string;
    size?: SIZE;
    selected?: string;
} & BoxProps & ThemeProps;

export const NeonTreeBase: React.FC<NeonTreeProps> =
    (props: NeonTreeProps) => {

        return (<NeonBox {...boxProps(props)}>
            {props.tree.map((route: TreeRoute, index: number) => {

                const key: string = route.key || index.toString();

                return (<NeonShine
                    buttonClassName={mergeClasses(
                        assertIfTrue(
                            props.selected === key,
                            NeonNavigationStyle.treeSelected,
                        ),
                        props.buttonClassName,
                    )}
                    size={props.size}
                    onClick={route.onClick}
                    key={key}
                >
                    {route.text}
                </NeonShine>);
            })}
        </NeonBox>);
    };

export const NeonTree: ThemedComponent<NeonTreeProps> = withConsumer<NeonTreeProps>(NeonTreeBase);
