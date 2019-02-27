/**
 * @author WMXPY
 * @namespace Neon_Flag
 * @description Sticker
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { NeonPeek, NeonPeekCut } from "../button/peek";
import { CORNER, MARGIN, SIGNAL } from "../declare";
import { NeonStickerStyle } from "./style/sticker";

export type NeonStickerCut = {

    readonly title: string;

    readonly type?: SIGNAL;
    readonly info?: string;

    readonly peek?: NeonPeekCut;
    readonly peekCorner?: CORNER;
};

export type NeonStickerProps = {

    readonly hidden?: boolean;
} & NeonStickerCut & ThemeProps & BoxProps;

const getColorStyle = (style: Classes, type?: SIGNAL): string => {

    switch (type) {
        case SIGNAL.ERROR: return style.error;
        case SIGNAL.WARNING: return style.warning;
        case SIGNAL.SUCCEED: return style.succeed;
        case SIGNAL.PLAIN:
        default: return style.plain;
    }
};

const getPositionStyle = (position: CORNER, padding: number = 0): React.CSSProperties => {

    switch (position) {
        case CORNER.BOTTOM_LEFT: return {
            left: padding,
            bottom: padding,
        };
        case CORNER.BOTTOM_RIGHT: return {
            right: padding,
            bottom: padding,
        };
        case CORNER.TOP_LEFT: return {
            left: padding,
            top: padding,
        };
        case CORNER.TOP_RIGHT: return {
            right: padding,
            top: padding,
        };
    }
};

const renderPeek = (style: Classes, props: NeonStickerProps): React.ReactNode => {

    if (!props.peek) {
        return null;
    }

    return (<NeonPeek
        ignoreTheme
        margin={MARGIN.TINY}
        style={getPositionStyle(props.peekCorner || CORNER.TOP_LEFT)}
        className={style.peek}
        {...props.peek}
    />);
};

export const NeonStickerBase: React.FC<NeonStickerProps> = (props: NeonStickerProps) => {

    const stickerStyle: Classes = NeonStickerStyle.use();

    return (<NeonBox {...boxProps(props, stickerStyle.box)}>
        <div className={stickerStyle.holder}></div>
        <div className={mergeClasses(stickerStyle.title, getColorStyle(stickerStyle, props.type))}>{props.title}</div>
        <div className={stickerStyle.holder}>
            {props.info && <div>{props.info}</div>}
        </div>
        {renderPeek(stickerStyle, props)}
    </NeonBox>);
};

export const NeonSticker: ThemedComponent<NeonStickerProps> = withConsumer<NeonStickerProps>(NeonStickerBase);

