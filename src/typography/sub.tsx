/**
 * @author WMXPY
 * @namespace Neon_Typography
 * @description Button
 */

import { Classes } from "jss";
import * as React from "react";
import { NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { ALIGN, MARGIN } from "../declare";
import { NeonTypographySubStyle } from "./style/sub";
import { getAlignClass, NeonTypographyStyle } from "./style/title";

export type NeonSubProps = {

    readonly align?: ALIGN,
    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;

    readonly href?: string;
    readonly onClick?: () => any;
} & ThemeProps;

const renderSubTag = (titleStyle: Classes, children: any, href?: string, onClick?: () => any) => {

    const subStyle: Classes = NeonTypographySubStyle.use();

    if (href) {
        const classes: string[] = [
            subStyle.link,
            titleStyle.dye,
        ];

        return (<a href={href} className={classes.join(' ')}>{children}</a>);
    }

    if (onClick) {
        const classes: string[] = [
            subStyle.link,
            titleStyle.dye,
        ];

        return (<a onClick={onClick} className={classes.join(' ')}>{children}</a>);
    }

    return <span>{children}</span>;
};

export const NeonSubBase: React.FC<NeonSubProps> =
    (props: NeonSubProps) => {

        const titleStyle: Classes = NeonTypographyStyle.use();

        const classes: string[] = [
            getAlignClass(titleStyle, props.align || ALIGN.LEFT),
            titleStyle.small,
            titleStyle.dye,
        ];

        return (<NeonBox
            style={props.style}
            margin={props.margin}
            className={classes.join(' ')}
        >
            {renderSubTag(titleStyle, props.children, props.href, props.onClick)}
        </NeonBox>);
    };

export const NeonSub: ThemedComponent<NeonSubProps> = withConsumer<NeonSubProps>(NeonSubBase);
