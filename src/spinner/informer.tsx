/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Informer
 */

import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { mergeClasses } from "../#common/style";
import { NeonInformerStyle, NeonSpinnerStyle } from "./style";

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
                <div className={this._frontClass()} />
                <div className={this._backClass()} />
            </div>
        </div>);
    }

    private _frontClass(): string | undefined {

        return mergeClasses(
            NeonSpinnerStyle.front,
            NeonSpinnerStyle.enableFront,
        );
    }

    private _backClass(): string | undefined {

        return mergeClasses(
            NeonSpinnerStyle.back,
            NeonSpinnerStyle.enableBack,
            NeonInformerStyle.informerBack,
        );
    }
}

export const NeonInformer: ThemedComponent<NeonInformerProps> = withConsumer<NeonInformerProps>(NeonInformerBase);
