/**
 * @author WMXPY
 * @namespace Neon_Flag
 * @description Flag
 */

import * as React from "react";
import { NeonBox } from "../box/box";
import { MARGIN, SIZE } from "../declare";
import { FLAG_TYPE } from "./declare";
import { NeonFlagStyle } from "./style";

export type NeonFlagProps = {

    readonly type: FLAG_TYPE;

    readonly info?: string;
    readonly maxSize?: SIZE;

    readonly hidden?: boolean;

    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly children?: any;
};

export type NeonFlagState = {

    readonly expended: boolean;
};

export class NeonFlag extends React.Component<NeonFlagProps, NeonFlagState> {

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

        return (<NeonBox
            margin={this.props.margin}
            className={this._getFlagClasses()}
            style={this.props.style}>

            <div className={NeonFlagStyle.main}>
                <div className={NeonFlagStyle.content}>
                    {this.props.children}
                </div>
                {this._getExpendButton()}
            </div>

            {this.props.info
                ? (<div className={NeonFlagStyle.info}>
                    {this.props.info}
                </div>)
                : void 0}
        </NeonBox>);
    }

    private _toggleExpend(): void {

        this.setState({
            expended: !this.state.expended,
        });
    }

    private _getExpendButton(): any {

        const expendClass: string =
            this.state.expended
                ? NeonFlagStyle.expended
                : NeonFlagStyle.shrinked;

        const classes: string = [
            NeonFlagStyle.expend,
            expendClass,
        ].join(' ');

        if (this.props.info) {

            return (<button
                className={classes}
                onClick={this._toggleExpend}>
                ▼
            </button>);
        }
        return void 0;
    }

    private _getFlagClasses(): string {

        const flagClass: string = (() => {
            switch (this.props.type) {
                case FLAG_TYPE.ERROR: return NeonFlagStyle.error;
                case FLAG_TYPE.WARNING:
                default: return NeonFlagStyle.warning;
            }
        })();

        const classes: string[] = [
            NeonFlagStyle.flag,
            flagClass,
        ];

        if (this.props.info) {

            const maxSizeClass: string = (() => {
                switch (this.props.maxSize as SIZE) {
                    case SIZE.FULL: return NeonFlagStyle.full;
                    case SIZE.NORMAL:
                    default: return NeonFlagStyle.normal;
                }
            })();
            if (this.state.expended) {
                classes.push(
                    maxSizeClass,
                );
            }
        }

        if (this.props.hidden) {

            classes.push(
                NeonFlagStyle.hidden,
            );
        }

        return classes.join(' ');
    }
}
