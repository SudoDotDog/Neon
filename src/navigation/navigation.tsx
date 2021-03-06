/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Navigation
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { NeonButton } from "../button/index";
import { MARGIN, SIZE } from "../declare";
import { NeonNavigationStyle } from "./style/navigation";

export type NavigationRoute = {
    children: any;
    onClick?: () => void;
    key?: string;
};

export type NeonNavigationProps = {
    navigation: NavigationRoute[];
    margin?: MARGIN;
    size?: SIZE;
    selected?: string;
} & BoxProps & ThemeProps;

export const NeonNavigationBase: React.FC<NeonNavigationProps> =
    (props: NeonNavigationProps) => {

        const navigationStyle: Classes = NeonNavigationStyle.use();

        return (<NeonBox {...boxProps(props, navigationStyle.box)}>
            {props.navigation.map((route: NavigationRoute, index: number) => {

                const key: string = route.key || index.toString();

                return (<NeonButton
                    ignoreTheme
                    buttonClassName={mergeClasses(
                        assertIfTrue(
                            props.selected === key,
                            'selected',
                        ),
                        navigationStyle.button,
                    )}
                    key={key}
                    size={props.size || SIZE.MEDIUM}
                    margin={props.margin || MARGIN.NONE}
                    onClick={route.onClick}
                >
                    {route.children}
                </NeonButton>);
            })}
        </NeonBox>);
    };

export const NeonNavigation: ThemedComponent<NeonNavigationProps> = withConsumer<NeonNavigationProps>(NeonNavigationBase);
