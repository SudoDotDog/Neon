/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Button
 */

import * as React from "react";

export type NeonButtonProps = {

    children: JSX.Element;
};

export const NeonButton: React.SFC<NeonButtonProps> =
    (props: NeonButtonProps) => {

        return <button>{props.children}</button>;
    };
