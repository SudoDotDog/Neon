/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Peek
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { SIZE } from "../declare";
import { NeonCoin, NeonCoinCut } from "./coin";
import { NeonPeekStyle } from "./style/peek";

export type NeonPeekCut = {

    readonly expend?: any;
} & NeonCoinCut;

export type NeonPeekProps = NeonPeekCut & BoxProps;

export type NeonPeekStates = {

    readonly hovering: boolean;
};

export class NeonPeekBase extends React.Component<NeonPeekProps, NeonPeekStates> {

    public readonly state: NeonPeekStates = {

        hovering: false,
    };

    private readonly _peekStyle: Classes = NeonPeekStyle.use();

    public constructor(props: NeonPeekProps) {

        super(props);

        this._handleMouseEnter = this._handleMouseEnter.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    public render(): JSX.Element {

        return (<NeonCoin
            {...boxProps(this.props)}
            buttonClassName={mergeClasses(
                this._peekStyle.peek,
                this._getSizeClass(),
            )}
            circle={this.props.circle}
            size={this.props.size}
            disabled={this.props.disabled}
            tabIndex={this.props.tabIndex}
            onClick={this.props.onClick}
            buttonAttributes={this._getMouseHandlers()}
        >
            {this.state.hovering ? this.props.expend : this.props.children}
        </NeonCoin>);
    }

    private _getMouseHandlers(): Record<string, any> {

        if (this.props.expend) {
            return {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                onMouseEnter: this._handleMouseEnter,
                // eslint-disable-next-line @typescript-eslint/unbound-method
                onMouseLeave: this._handleMouseLeave,
            };
        }

        return {};
    }

    private _handleMouseEnter(): void {

        this.setState({
            hovering: true,
        });
    }

    private _handleMouseLeave(): void {

        this.setState({
            hovering: false,
        });
    }

    private _getSizeClass(): string {

        switch (this.props.size) {

            case SIZE.MEDIUM: return this._peekStyle.sizeMedium;
            case SIZE.LARGE: return this._peekStyle.sizeLarge;
            case SIZE.FULL: return this._peekStyle.sizeFull;

            case SIZE.RELATIVE:
            case SIZE.NORMAL:
            default: return this._peekStyle.sizeNormal;
        }
    }
}

export const NeonPeek: React.ComponentType<NeonPeekProps> = NeonPeekBase;
