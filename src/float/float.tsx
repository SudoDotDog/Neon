/**
 * @author WMXPY
 * @namespace Neon_Float
 * @description Float
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { NeonCoin, NeonCoinCut } from "../button/coin";
import { NeonFloatStyle } from "./style/float";

export type NeonFloatProps = {

    readonly children?: any;
} & NeonCoinCut & BoxProps;

export type NeonFloatStates = {

    readonly hovering: boolean;
};

export class NeonFloatBase extends React.Component<NeonFloatProps> {

    public readonly state: NeonFloatStates = {

        hovering: false,
    };

    private readonly _floatStyle: Classes = NeonFloatStyle.use();

    public constructor(props: NeonFloatProps) {

        super(props);

        this._handleMouseEnter = this._handleMouseEnter.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    public render(): JSX.Element {

        return (
            <div
                className={mergeClasses(
                    this._floatStyle.float,
                )}
            >
                <NeonCoin
                    {...boxProps(this.props)}
                    disabled={this.props.disabled}
                    buttonClassName={this.props.buttonClassName}
                    tabIndex={this.props.tabIndex}
                    onClick={this.props.onClick}
                    buttonAttributes={{
                        onMouseEnter: this._handleMouseEnter,
                        onMouseLeave: this._handleMouseLeave,
                    }}
                >
                    {this.props.children}
                </NeonCoin>
            </div>
        );
    }

    private _handleMouseEnter() {

        this.setState({
            hovering: true,
        });
    }

    private _handleMouseLeave() {

        this.setState({
            hovering: false,
        });
    }
}

export const NeonFloat: React.ComponentType<NeonFloatProps> = NeonFloatBase;
