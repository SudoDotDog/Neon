/**
 * @author WMXPY
 * @namespace Neon_Flag
 * @description Sticker
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonFlagStyle } from "./style";

export type NeonStickerProps = {

    readonly hidden?: boolean;

    readonly title: string;
    readonly info?: string;
} & ThemeProps & BoxProps;

export const NeonStickerBase: React.FC<NeonStickerProps> = (props: NeonStickerProps) => {

    return (<NeonBox {...boxProps(props, NeonFlagStyle.sticker)}>
        <div className={NeonFlagStyle.stickerHolder}></div>
        <div className={NeonFlagStyle.stickerTitle}>{props.title}</div>
        <div className={NeonFlagStyle.stickerHolder}>{props.info}</div>
    </NeonBox>);
};

export const NeonSticker: ThemedComponent<NeonStickerProps> = withConsumer<NeonStickerProps>(NeonStickerBase);

