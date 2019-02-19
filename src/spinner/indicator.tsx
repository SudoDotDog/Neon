/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Indicator
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTri, assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { NeonSpinner } from "./spinner";
import { NeonIndicatorStyle } from "./style";

export type NeonIndicatorProps = {

    readonly loading?: boolean;
    readonly covering?: boolean;
    readonly cover?: React.ReactNode;

    readonly children?: any;
} & ThemeProps & BoxProps;

export const NeonIndicatorBase: React.FC<NeonIndicatorProps> = (props: NeonIndicatorProps) => {

    const classes: string | undefined = mergeClasses(
        NeonIndicatorStyle.wrap,
        assertIfTri(props.loading || props.covering, NeonIndicatorStyle.invisible, NeonIndicatorStyle.visible),
    );

    const coverClasses: string | undefined = mergeClasses(
        NeonIndicatorStyle.cover,
        NeonIndicatorStyle.invisible,
        assertIfTrue(props.covering && (!props.loading), NeonIndicatorStyle.visible),
    );

    return (<NeonBox {...boxProps(props, NeonIndicatorStyle.box)}>
        <div className={classes}>
            {props.children}
        </div>
        <div className={coverClasses}>{props.cover}</div>
        <div className={NeonIndicatorStyle.spinner}>
            <NeonSpinner loading={props.loading || false} />
        </div>
    </NeonBox>);
};

export const NeonIndicator: ThemedComponent<NeonIndicatorProps> = withConsumer<NeonIndicatorProps>(NeonIndicatorBase);
