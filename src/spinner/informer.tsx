/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Informer
 */

import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { NeonSpinnerStyle } from "./style";

export type NeonInformerProps = {

    readonly loading: boolean;
} & ThemeProps;

export type NeonInformerState = {

    readonly spinning: boolean;
};

export class NeonInformerBase extends React.Component<NeonInformerProps, NeonInformerState> {

    public render(): JSX.Element {

        return (<div className={NeonSpinnerStyle.loading}>
            <div className={NeonSpinnerStyle.outer} >
                <div style={{ width: '100px', backgroundColor: 'red' }} />
            </div>
        </div>);
    }
}

export const NeonInformer: ThemedComponent<NeonInformerProps> = withConsumer<NeonInformerProps>(NeonInformerBase);
