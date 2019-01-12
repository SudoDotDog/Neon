/**
 * @author WMXPY
 * @namespace Neon_Common
 * @description Consumer
 */

import * as React from "react";
import { NeonTheme, NeonThemeConsumer } from "../theme/index";

export const withConsumer = <T extends ThemeProps>(Component: any): React.ComponentType<ExcludeTheme<T>> =>

    <P extends React.Props<T>>(originProps: P) =>

        React.createElement(NeonThemeConsumer, {} as any, (context: NeonTheme) =>

            React.createElement(Component, {
                ...originProps,
                theme: context,
            }, originProps.children),
        );

export type ThemeProps = {
    theme: NeonTheme;
};

export type ExcludeTheme<T extends ThemeProps> = Pick<T, Exclude<keyof T, 'theme'>>;
export type ThemedComponent<T extends ThemeProps> = React.ComponentType<ExcludeTheme<T>>;
