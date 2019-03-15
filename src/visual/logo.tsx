/**
 * @author WMXPY
 * @namespace Neon_Visual
 * @description Logo
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { SIZE } from "../declare/index";
import { NeonLogoStyle } from "./style/logo";

export type NeonLogoProps = {

    readonly size?: SIZE;

    readonly title: string;
    readonly sub?: string;
} & ThemeProps & BoxProps;

const getSizeClass = (style: Classes, size?: SIZE) => {

    switch (size) {
        case SIZE.NORMAL: return style.normal;
        case SIZE.LARGE: return style.large;
        case SIZE.FULL: return style.full;
        case SIZE.MEDIUM:
        default: return style.medium;
    }
};

const getSizeTitleClass = (style: Classes, size?: SIZE) => {

    switch (size) {
        case SIZE.NORMAL: return style.normalTitle;
        case SIZE.LARGE: return style.largeTitle;
        case SIZE.FULL: return style.fullTitle;
        case SIZE.MEDIUM:
        default: return style.mediumTitle;
    }
};

const getSizeSubClass = (style: Classes, size?: SIZE) => {

    switch (size) {
        case SIZE.NORMAL: return style.normalSub;
        case SIZE.LARGE: return style.largeSub;
        case SIZE.FULL: return style.fullSub;
        case SIZE.MEDIUM:
        default: return style.mediumSub;
    }
};

export const NeonLogoBase: React.FC<NeonLogoProps> = (props: NeonLogoProps) => {

    const logoStyle: Classes = NeonLogoStyle.use();

    return <NeonBox
        {...boxProps(
            props,
            logoStyle.wrap,
            getSizeClass(logoStyle, props.size),
        )}
    >
        <div
            className={mergeClasses(
                logoStyle.title,
                logoStyle.flexEnd,
                getSizeTitleClass(logoStyle, props.size),
            )}
        >
            <div className={logoStyle.innerTitle}>{props.title}</div>
        </div>
        <div
            className={mergeClasses(
                logoStyle.sub,
                logoStyle.flexEnd,
                getSizeSubClass(logoStyle, props.size),
            )}
        >
            <div className={logoStyle.innerSub}>{props.sub}</div>
        </div>
    </NeonBox>;
};

export const NeonLogo: ThemedComponent<NeonLogoProps> = withConsumer<NeonLogoProps>(NeonLogoBase);
