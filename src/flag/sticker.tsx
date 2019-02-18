/**
 * @author WMXPY
 * @namespace Neon_Flag
 * @description Sticker
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style";
import { NeonPeek, NeonPeekCut } from "../button/peek";
import { CORNER, MARGIN } from "../declare";
import { FLAG_TYPE } from "./declare";
import { NeonStickerStyle } from "./style";

export type NeonStickerCut = {

    readonly title: string;

    readonly type?: FLAG_TYPE;
    readonly info?: string;

    readonly peek?: NeonPeekCut;
    readonly peekCorner?: CORNER;
};

export type NeonStickerProps = {

    readonly hidden?: boolean;
} & NeonStickerCut & ThemeProps & BoxProps;

const getColorStyle = (type?: FLAG_TYPE): string => {

    switch (type) {
        case FLAG_TYPE.ERROR: return NeonStickerStyle.error;
        case FLAG_TYPE.WARNING: return NeonStickerStyle.warning;
        case FLAG_TYPE.SUCCEED: return NeonStickerStyle.succeed;
        case FLAG_TYPE.PLAIN:
        default: return NeonStickerStyle.plain;
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

const renderPeek = (props: NeonStickerProps): React.ReactNode => {

    if (!props.peek) {
        return null;
    }

    return (<NeonPeek
        ignoreTheme
        margin={MARGIN.TINY}
        style={getPositionStyle(props.peekCorner || CORNER.TOP_LEFT)}
        className={NeonStickerStyle.peek}
        {...props.peek}
    />);
};

export const NeonStickerBase: React.FC<NeonStickerProps> = (props: NeonStickerProps) => {

    return (<NeonBox {...boxProps(props, NeonStickerStyle.box)}>
        <div className={NeonStickerStyle.holder}></div>
        <div className={mergeClasses(NeonStickerStyle.title, getColorStyle(props.type))}>{props.title}</div>
        <div className={NeonStickerStyle.holder}>
            {props.info && <div>{props.info}</div>}
        </div>
        {renderPeek(props)}
    </NeonBox>);
};

export const NeonSticker: ThemedComponent<NeonStickerProps> = withConsumer<NeonStickerProps>(NeonStickerBase);

