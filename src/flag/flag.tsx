/**
 * @author WMXPY
 * @namespace Neon_Flag
 * @description Flag
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { SIGNAL, SIZE } from "../declare";
import { NeonFlagStyle } from "./style/flag";

export type NeonFlagCut = {

    readonly type?: SIGNAL;
    readonly message?: string;
    readonly info?: string;
};

export type NeonFlagProps = {

    readonly maxSize?: SIZE;
    readonly hidden?: boolean;
    readonly infoClassName?: string;
    readonly contentClassName?: string;
} & NeonFlagCut & ThemeProps & BoxProps;

export type NeonFlagState = {

    readonly expended: boolean;
};

export class NeonFlagBase extends React.Component<NeonFlagProps, NeonFlagState> {

    public static readonly defaultProps: Partial<NeonFlagProps> = {

        maxSize: SIZE.NORMAL,
    };

    public readonly state: NeonFlagState = {

        expended: false,
    };

    private readonly _flagStyle: Classes = NeonFlagStyle.use();

    public render(): JSX.Element {

        return (<NeonBox {...boxProps(this.props, this._getFlagClasses())}>

            <div className={this._flagStyle.main}>
                <div className={this._getContentClasses()}>
                    {this.props.message}
                </div>
                {this._renderExpendButton()}
            </div>

            {this._renderInfoBlock()}
        </NeonBox>);
    }

    private _toggleExpend(): void {

        this.setState({
            expended: !this.state.expended,
        });
    }

    private _renderInfoBlock(): any {
        if (this.props.info) {
            return (<div className={this._getInfoClasses()}>
                {this.props.info}
            </div>);
        }
        return void 0;
    }

    private _renderExpendButton(): any {
        if (this.props.info) {
            return (
                <button
                    className={this._getExpendButtonClasses()}
                    onClick={this._toggleExpend.bind(this)}>
                    ▼
                </button>
            );
        }
        return void 0;
    }

    private _getExpendButtonClasses(): string {

        const expendClass: string =
            this.state.expended
                ? this._flagStyle.expended
                : this._flagStyle.shrinked;

        return [
            this._flagStyle.expend,
            expendClass,
        ].join(' ');
    }

    private _getContentClasses(): string {

        const classes: string[] = [
            this._flagStyle.content,
        ];

        if (this.props.contentClassName) {
            classes.push(this.props.contentClassName);
        }

        return classes.join(' ');
    }

    private _getInfoClasses(): string {

        const classes: string[] = [
            this._flagStyle.info,
        ];

        if (this.props.infoClassName) {
            classes.push(this.props.infoClassName);
        }

        if (this.props.info) {

            const maxSizeClass: string = (() => {
                switch (this.props.maxSize as SIZE) {

                    case SIZE.FULL:
                    case SIZE.LARGE: return this._flagStyle.large;
                    case SIZE.MEDIUM:
                    case SIZE.NORMAL:
                    default: return this._flagStyle.normal;
                }
            })();
            classes.push(
                this.state.expended ? maxSizeClass : this._flagStyle.zero,
            );
        }

        return classes.join(' ');
    }

    private _getFlagClasses(): string {

        const flagClass: string = (() => {
            switch (this.props.type) {
                case SIGNAL.ERROR: return this._flagStyle.error;
                case SIGNAL.WARNING: return this._flagStyle.warning;
                case SIGNAL.SUCCEED: return this._flagStyle.succeed;
                case SIGNAL.PLAIN:
                default: return this._flagStyle.plain;
            }
        })();

        const classes: string[] = [
            this._flagStyle.flag,
            flagClass,
        ];

        if (this.props.hidden) {

            classes.push(
                this._flagStyle.hidden,
            );
        }

        return classes.join(' ');
    }
}

export const NeonFlag: ThemedComponent<NeonFlagProps> = withConsumer<NeonFlagProps>(NeonFlagBase);
