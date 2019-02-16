/**
 * @author WMXPY
 * @namespace Neon_Flag
 * @description Flag
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { SIZE } from "../declare";
import { FLAG_TYPE } from "./declare";
import { NeonFlagStyle } from "./style";

export type NeonFlagCut = {

    readonly type?: FLAG_TYPE;
    readonly message?: string;
    readonly info?: string;
};

export type NeonFlagProps = {

    readonly maxSize?: SIZE;
    readonly hidden?: boolean;
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

    public constructor(props: NeonFlagProps) {

        super(props);

        this._toggleExpend = this._toggleExpend.bind(this);
    }

    public render(): JSX.Element {

        return (<NeonBox {...boxProps(this.props, this._getFlagClasses())}>

            <div className={NeonFlagStyle.main}>
                <div className={NeonFlagStyle.content}>
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
            return (<button
                className={this._getExpendButtonClasses()}
                onClick={this._toggleExpend}>
                ▼
            </button>);
        }
        return void 0;
    }

    private _getExpendButtonClasses(): string {

        const expendClass: string =
            this.state.expended
                ? NeonFlagStyle.expended
                : NeonFlagStyle.shrinked;

        return [
            NeonFlagStyle.expend,
            expendClass,
        ].join(' ');
    }

    private _getInfoClasses(): string {

        const classes: string[] = [
            NeonFlagStyle.info,
        ];

        if (this.props.info) {

            const maxSizeClass: string = (() => {
                switch (this.props.maxSize as SIZE) {

                    case SIZE.FULL:
                    case SIZE.LARGE: return NeonFlagStyle.large;
                    case SIZE.MEDIUM:
                    case SIZE.NORMAL:
                    default: return NeonFlagStyle.normal;
                }
            })();
            classes.push(
                this.state.expended ? maxSizeClass : NeonFlagStyle.zero,
            );
        }

        return classes.join(' ');
    }

    private _getFlagClasses(): string {

        const flagClass: string = (() => {
            switch (this.props.type) {
                case FLAG_TYPE.ERROR: return NeonFlagStyle.error;
                case FLAG_TYPE.WARNING: return NeonFlagStyle.warning;
                case FLAG_TYPE.SUCCEED: return NeonFlagStyle.succeed;
                case FLAG_TYPE.PLAIN:
                default: return NeonFlagStyle.plain;
            }
        })();

        const classes: string[] = [
            NeonFlagStyle.flag,
            flagClass,
        ];

        if (this.props.hidden) {

            classes.push(
                NeonFlagStyle.hidden,
            );
        }

        return classes.join(' ');
    }
}

export const NeonFlag: ThemedComponent<NeonFlagProps> = withConsumer<NeonFlagProps>(NeonFlagBase);
