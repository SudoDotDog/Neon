/**
 * @author WMXPY
 * @namespace Neon_Theme
 * @description Index
 */

import * as React from "react";
import { getDefaultTheme, NeonTheme } from "./declare";

const NeonThemeContext: React.Context<NeonTheme> = React.createContext<NeonTheme>(getDefaultTheme());

export const NeonThemeConsumer = NeonThemeContext.Consumer;
export const NeonThemeProvider = NeonThemeContext.Provider;

export { NeonTheme };

