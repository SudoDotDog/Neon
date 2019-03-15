/**
 * @author WMXPY
 * @namespace Neon_Pivot
 * @description Header
 */

import { Classes } from "jss";
import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { mergeClasses } from "../#common/style/decorator";
import { SIZE } from "../declare/index";
import { NeonLogo } from "../visual/logo";
import { NeonHeaderStyle } from "./style/header";

export type NeonHeaderProps = {

    readonly title: string;
    readonly sub?: string;

    readonly size?: SIZE;
} & ThemeProps;

const getSizeClass = (style: Classes, size?: SIZE) => {

    switch (size) {
        case SIZE.NORMAL: return style.normal;
        case SIZE.LARGE: return style.large;
        case SIZE.FULL: return style.full;
        case SIZE.MEDIUM:
        default: return style.medium;
    }
};

export const NeonHeaderBase: React.FC<NeonHeaderProps> = (props: NeonHeaderProps) => {

    const headerStyle: Classes = NeonHeaderStyle.use();

    return (<div className={mergeClasses(
        headerStyle.header,
        getSizeClass(headerStyle, props.size),
    )}>
        <NeonLogo
            className={headerStyle.logo}
            title={props.title}
            size={props.size}
            sub={props.sub}
        />
    </div>);
};

export const NeonHeader: ThemedComponent<NeonHeaderProps> = withConsumer<NeonHeaderProps>(NeonHeaderBase);
