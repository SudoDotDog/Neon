/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Indicator
 */

import { Classes } from "jss";
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

    const IndicatorStyle: Classes = NeonIndicatorStyle.use();

    const classes: string | undefined = mergeClasses(
        IndicatorStyle.wrap,
        assertIfTri(props.loading || props.covering, IndicatorStyle.invisible, IndicatorStyle.visible),
    );

    const coverClasses: string | undefined = mergeClasses(
        IndicatorStyle.cover,
        IndicatorStyle.invisible,
        assertIfTrue(props.covering && (!props.loading), IndicatorStyle.visible),
    );

    return (<NeonBox {...boxProps(props, IndicatorStyle.box)}>
        <div className={classes}>
            {props.children}
        </div>
        <div className={coverClasses}>{props.cover}</div>
        <div className={IndicatorStyle.spinner}>
            <NeonSpinner loading={props.loading || false} />
        </div>
    </NeonBox>);
};

export const NeonIndicator: ThemedComponent<NeonIndicatorProps> = withConsumer<NeonIndicatorProps>(NeonIndicatorBase);
