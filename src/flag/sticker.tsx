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
import { NeonButton } from "../button";
import { FLAG_TYPE } from "./declare";
import { NeonStickerStyle } from "./style";

export type NeonStickerCut = {

    readonly title: string;

    readonly type?: FLAG_TYPE;
    readonly info?: string;

    readonly button?: string;
    readonly onClick?: () => void;
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

export const NeonStickerBase: React.FC<NeonStickerProps> = (props: NeonStickerProps) => {

    return (<NeonBox {...boxProps(props, NeonStickerStyle.box)}>
        <div className={NeonStickerStyle.holder}></div>
        <div className={mergeClasses(NeonStickerStyle.title, getColorStyle(props.type))}>{props.title}</div>
        <div className={NeonStickerStyle.holder}>
            {props.info && <div>{props.info}</div>}
            {props.button && <NeonButton onClick={props.onClick}>{props.button}</NeonButton>}
        </div>
    </NeonBox>);
};

export const NeonSticker: ThemedComponent<NeonStickerProps> = withConsumer<NeonStickerProps>(NeonStickerBase);

