/**
 * @author WMXPY
 * @namespace Neon_Spinner
 * @description Spinner
 */

import * as React from "react";
import { NeonSpinnerStyle } from "./style";

export type NeonSpinnerProps = {

    loading: boolean;
};

export type NeonSpinnerState = {

    spinning: boolean;
};

export class NeonSpinner extends React.Component<NeonSpinnerProps, NeonSpinnerState> {

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

    private _frontClass(): string {

        const classes: string[] = [
            NeonSpinnerStyle.front,
            this.props.loading ? NeonSpinnerStyle.enableFront : NeonSpinnerStyle.disable,
        ];

        if (this.state.spinning) {

            classes.push(NeonSpinnerStyle.spinningFront);
        }

        return classes.join(' ');
    }

    private _backClass(): string {

        const classes: string[] = [
            NeonSpinnerStyle.back,
            this.props.loading ? NeonSpinnerStyle.enableBack : NeonSpinnerStyle.disable,
        ];

        if (this.state.spinning) {

            classes.push(NeonSpinnerStyle.spinningBack);
        }

        return classes.join(' ');
    }
}
