/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Spinner
 */

import { Classes } from "jss";
import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { NeonSpinnerStyle } from "./style";

const SpinnerStyle: Classes = NeonSpinnerStyle.use();

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

        return (<div className={SpinnerStyle.loading}>
            <div className={SpinnerStyle.outer} >
                <div className={this._frontClass()} />
                <div className={this._backClass()} />
            </div>
        </div>);
    }

    private _frontClass(): string | undefined {

        return mergeClasses(
            SpinnerStyle.front,
            this.props.loading ? SpinnerStyle.enableFront : SpinnerStyle.disable,
            assertIfTrue(this.state.spinning, SpinnerStyle.spinningFront),
        );
    }

    private _backClass(): string | undefined {

        return mergeClasses(
            SpinnerStyle.back,
            this.props.loading ? SpinnerStyle.enableBack : SpinnerStyle.disable,
            assertIfTrue(this.state.spinning, SpinnerStyle.spinningBack),
        );
    }
}

export const NeonSpinner: ThemedComponent<NeonSpinnerProps> = withConsumer<NeonSpinnerProps>(NeonSpinnerBase);
