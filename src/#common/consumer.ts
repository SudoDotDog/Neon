/**
 * @author WMXPY
 * @namespace Neon_Common
 * @description Consumer
 */

import * as React from "react";
import { NeonTheme, NeonThemeConsumer } from "../theme/index";

export const withConsumer = <T>(Component: any): React.ComponentType<T> =>

    <P extends React.Props<T>>(originProps: P) =>

        React.createElement(NeonThemeConsumer, {} as any, (context: NeonTheme) =>

            React.createElement(Component, {
                ...originProps,
                theme: context,
            }, originProps.children),
        );
