/**
 * @author WMXPY
 * @namespace Neon_Theme
 * @description Index
 */

import * as React from "react";
import { getDefaultTheme, NeonTheme } from "./declare";

const NeonThemeContext: React.Context<NeonTheme> = React.createContext<NeonTheme>(getDefaultTheme());

export const NeonThemeConsumer = NeonThemeContext.Consumer;
export const NeonThemeProvider: React.ComponentType<React.ProviderProps<Partial<NeonTheme>>> =
    (props: React.ProviderProps<Partial<NeonTheme>>) => {

        const defaultTheme: NeonTheme = getDefaultTheme();
        const combinedTheme: NeonTheme = {
            ...defaultTheme,
            ...props.value,
        };

        return React.createElement(NeonThemeContext.Provider, {
            value: combinedTheme,
        }, props.children);
    };

export { NeonTheme };

