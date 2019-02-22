/**
 * @author WMXPY
 * @namespace Neon_Card
 * @description Racket
 */

import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";

export type NeonRacketProps = {

} & ThemeProps & BoxProps;

export const NeonRacketBase: React.FC<NeonRacketProps> = (props: NeonRacketProps) => {

    return <div></div>;
};

export const NeonRacket: ThemedComponent<NeonRacketProps> = withConsumer<NeonRacketProps>(NeonRacketBase);
