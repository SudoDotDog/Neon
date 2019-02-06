/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Spinner
 */

import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { assertIfTrue, mergeClasses } from "../#common/style";
import { NeonSpinnerStyle } from "./style";

export type NeonSpinnerProps = {

    readonly loading: boolean;
} & ThemeProps;

export type NeonSpinnerState = {

    readonly spinning: boolean;
};

export class NeonSpinnerBase extends React.Component<NeonSpinnerProps, NeonSpinnerState> {

    public readonly state: NeonSpinnerState = {

        spinning: this.props.loading,
    };

    private _timer: any;

    public constructor(props: NeonSpinnerProps) {

        super(props);

        this._timer = undefined;
    }

    public componentWillReceiveProps(nextProps: NeonSpinnerProps) {

        clearTimeout(this._timer);

        if (nextProps.loading) {

            this.setState({
                spinning: true,
            });
        } else {

            this._timer = setTimeout(() => this.setState({
                spinning: false,
            }), 1000);
        }
    }

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
            this.props.loading ? NeonSpinnerStyle.enableFront : NeonSpinnerStyle.disable,
            assertIfTrue(this.state.spinning, NeonSpinnerStyle.spinningFront),
        );
    }

    private _backClass(): string | undefined {

        return mergeClasses(
            NeonSpinnerStyle.back,
            this.props.loading ? NeonSpinnerStyle.enableBack : NeonSpinnerStyle.disable,
            assertIfTrue(this.state.spinning, NeonSpinnerStyle.spinningBack),
        );
    }
}

export const NeonSpinner: ThemedComponent<NeonSpinnerProps> = withConsumer<NeonSpinnerProps>(NeonSpinnerBase);
