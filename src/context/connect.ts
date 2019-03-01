/**
 * @author WMXPY
 * @namespace Neon_Context
 * @description Connect
 */

import * as React from "react";
import { NeonContextMenuContext } from "./context";
import { NeonContext } from "./declare";

const NeonContextConsumer = NeonContextMenuContext.Consumer;

export const withContextMenu = <T extends ContextProps>(Component: any): React.ComponentType<ExcludeContext<T>> =>

    <P extends React.Props<T>>(originProps: P) =>

        React.createElement(NeonContextConsumer, {} as any, (context: NeonContext) =>

            React.createElement(Component, {
                ...originProps,
                context,
            }, originProps.children),
        );

export type ContextProps = {
    readonly context: NeonContext;
};

export type ExcludeContext<T extends ContextProps> = Pick<T, Exclude<keyof T, 'context'>>;
export type ContextedComponent<T extends ContextProps> = React.ComponentType<ExcludeContext<T>>;
