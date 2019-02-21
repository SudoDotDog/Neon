/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Spinner
 */

import { Classes } from "jss";
import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { NeonSpinnerStyle } from "./style/spinner";

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
    private readonly _SpinnerStyle: Classes = NeonSpinnerStyle.use();

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

        return (<div className={this._SpinnerStyle.loading}>
            <div className={this._SpinnerStyle.outer} >
                <div className={this._frontClass()} />
                <div className={this._backClass()} />
            </div>
        </div>);
    }

    private _frontClass(): string | undefined {

        return mergeClasses(
            this._SpinnerStyle.front,
            this.props.loading ? this._SpinnerStyle.enableFront : this._SpinnerStyle.disable,
            assertIfTrue(this.state.spinning, this._SpinnerStyle.spinningFront),
        );
    }

    private _backClass(): string | undefined {

        return mergeClasses(
            this._SpinnerStyle.back,
            this.props.loading ? this._SpinnerStyle.enableBack : this._SpinnerStyle.disable,
            assertIfTrue(this.state.spinning, this._SpinnerStyle.spinningBack),
        );
    }
}

export const NeonSpinner: ThemedComponent<NeonSpinnerProps> = withConsumer<NeonSpinnerProps>(NeonSpinnerBase);
