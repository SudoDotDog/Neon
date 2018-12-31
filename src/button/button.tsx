/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Button
 */

import * as React from "react";

export type NeonButtonProps = {

    onClick: () => void;
    children: JSX.Element;
};

export const NeonButton: React.SFC<NeonButtonProps> =
    (props: NeonButtonProps) => {

        return (<button
            onClick={props.onClick}>
            {props.children}
        </button>);
    };
