/**
 * @author WMXPY
 * @namespace Neon_Card
 * @description Racket
 */

import { Classes } from "jss";
import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { NeonButton } from "../button/button";
import { SIZE } from "../declare/index";
import { NeonRacketStyle } from "./style/racket";

export type NeonRacketProps = {

    readonly text?: string;
    readonly image?: string;

    readonly size?: SIZE;

    readonly proportion?: number;
} & ThemeProps & BoxProps;

const getLeftClass = (style: Classes, size?: SIZE): string => {

    switch (size) {
        case SIZE.MEDIUM: return style.leftMedium;
        case SIZE.LARGE: return style.leftLarge;
        case SIZE.FULL: return style.leftFull;
        case SIZE.RELATIVE: return style.leftRelative;
        case SIZE.NORMAL:
        default: return style.leftNormal;
    }
};

const getSizeClass = (style: Classes, size?: SIZE): string => {

    switch (size) {
        case SIZE.MEDIUM: return style.medium;
        case SIZE.LARGE: return style.large;
        case SIZE.FULL: return style.full;
        case SIZE.RELATIVE: return style.relative;
        case SIZE.NORMAL:
        default: return style.normal;
    }
};

export const NeonRacketBase: React.FC<NeonRacketProps> = (props: NeonRacketProps) => {

    const racketStyle: Classes = NeonRacketStyle.use();

    const proportion: number = props.proportion || 3;

    return (<NeonButton
        ignoreTheme
        className={mergeClasses(
            props.className,
            racketStyle.box,
            getSizeClass(racketStyle, props.size),
        )}
        size={SIZE.RELATIVE}
        buttonClassName={racketStyle.button}
    >
        <div
            className={mergeClasses(
                racketStyle.left,
                getLeftClass(racketStyle, props.size),
            )}
        >
            <img
                className={racketStyle.image}
                src={props.image}
                alt={props.text}
            />
        </div>
        <div style={{ flex: proportion }}>
            {props.text}
        </div>
    </NeonButton>);
};

export const NeonRacket: ThemedComponent<NeonRacketProps> = withConsumer<NeonRacketProps>(NeonRacketBase);
