/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Navigation
 */

import * as React from "react";
import { assertIfTrue, mergeClasses } from "../#common/style";
import { NeonButton } from "../button/index";
import { MARGIN, SIZE } from "../declare";
import { NeonNavigationStyle } from "./style";

export type NavigationRoute = {
    onClick: () => void;
    text: string;
    key?: string;
};

export type NeonNavigationProps = {
    navigation: NavigationRoute[];
    margin?: MARGIN;
    size?: SIZE;
    selected?: string;
};

export const NeonNavigation: React.FC<NeonNavigationProps> =
    (props: NeonNavigationProps) => {

        return (<div className={NeonNavigationStyle.box}>
            {props.navigation.map((route: NavigationRoute) => {

                const key: string = route.key || route.text;

                return (<NeonButton
                    ignoreTheme
                    className={mergeClasses(
                        assertIfTrue(
                            props.selected === key,
                            'selected',
                        ),
                        NeonNavigationStyle.button,
                    )}
                    key={key}
                    size={props.size || SIZE.MEDIUM}
                    margin={props.margin || MARGIN.NONE}
                    onClick={route.onClick}
                >
                    {route.text}
                </NeonButton>);
            })}
        </div>);
    };
