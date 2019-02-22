/**
 * @author WMXPY
 * @namespace Neon_Dialog
 * @description Dialog
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { NeonDialogStyle } from "./style/dialog";

export type NeonDialogProps = {

    show?: boolean;
    blur?: boolean;

    children?: any;
} & BoxProps & ThemeProps;

export const NeonDialogBase: React.FC<NeonDialogProps> = (props: NeonDialogProps) => {

    if (!props.show) {
        return null;
    }

    const dialogStyle: Classes = NeonDialogStyle.use();

    return (<React.Fragment>
        {props.blur && <div className={mergeClasses(dialogStyle.fixed, dialogStyle.grayOut)} />}
        <div className={mergeClasses(dialogStyle.fixed, dialogStyle.center)}>
            <NeonBox
                ignoreTheme
                {...boxProps(
                    props,
                    dialogStyle.box,
                )}
            >
                {props.children}
            </NeonBox>
        </div>
    </React.Fragment>);
};

export const NeonDialog: ThemedComponent<NeonDialogProps> = withConsumer<NeonDialogProps>(NeonDialogBase);
