/**
 * @author WMXPY
 * @namespace Neon_Visual
 * @description Square
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { NeonSquareStyle } from "./style/square";

export type NeonSquareProps = {

    readonly width?: string;

    readonly children?: React.ReactNode;
} & BoxProps;

export const NeonSquareBase: React.FC<NeonSquareProps> = (props: NeonSquareProps) => {

    const squareStyle: Classes = NeonSquareStyle.use();

    return <NeonBox
        ignoreTheme
        {...boxProps(props)}
        style={{
            ...props.style,
            width: props.width,
        }}
    >
        <div className={squareStyle.outer}>
            <div className={squareStyle.inner}>
                {props.children}
            </div>
        </div>
    </NeonBox>;
};

export const NeonSquare: React.ComponentType<NeonSquareProps> = NeonSquareBase;
