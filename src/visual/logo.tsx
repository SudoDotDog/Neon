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
import { NeonSquare } from "./square";
import { NeonLogoStyle } from "./style/logo";

export type NeonLogoProps = {

    readonly width?: string;

    readonly title: string;
    readonly titleFontSize?: string;
    readonly sub?: string;
    readonly subFontSize?: string;
} & ThemeProps & BoxProps;

export const NeonLogoBase: React.FC<NeonLogoProps> = (props: NeonLogoProps) => {

    const logoStyle: Classes = NeonLogoStyle.use();

    return <NeonBox
        {...boxProps(
            props,
            logoStyle.wrap,
        )}
    >
        <NeonSquare
            width={props.width || "8rem"}
            className={logoStyle.title}
            style={{
                fontSize: props.titleFontSize || '3rem',
            }}
        >
            <div className={mergeClasses(
                logoStyle.alignBottom,
                logoStyle.paddingMore,
            )}>{props.title}</div>
        </NeonSquare>
        <div
            className={logoStyle.sub}
            style={{
                fontSize: props.subFontSize || '2rem',
            }}
        >
            <div className={logoStyle.placeholder}>{props.sub}</div>
            <div className={mergeClasses(
                logoStyle.alignBottom,
                logoStyle.innerSub,
            )}>{props.sub}</div>
        </div>
    </NeonBox>;
};

export const NeonLogo: ThemedComponent<NeonLogoProps> = withConsumer<NeonLogoProps>(NeonLogoBase);
