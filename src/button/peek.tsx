/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Peek
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { fixTabIndex } from "../#common/util";
import { SIZE } from "../declare";
import { getNeonButtonStyle, NeonButtonStyle } from "./style/button";
import { NeonPeekStyle } from "./style/peek";

export type NeonPeekCut = {

    readonly onClick?: () => void;

    readonly circle?: boolean;
    readonly disabled?: boolean;
    readonly tabIndex?: number;
    readonly size?: SIZE;
    readonly expend?: any;

    readonly children?: any;
};

export type NeonPeekProps = NeonPeekCut & ThemeProps & BoxProps;

export type NeonPeekStates = {

    readonly hovering: boolean;
};

export class NeonPeekBase extends React.Component<NeonPeekProps, NeonPeekStates> {

    public readonly state: NeonPeekStates = {

        hovering: false,
    };

    private readonly _buttonStyle: Classes = NeonButtonStyle.use();
    private readonly _peekStyle: Classes = NeonPeekStyle.use();

    public constructor(props: NeonPeekProps) {

        super(props);

        this._handleMouseEnter = this._handleMouseEnter.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    public render(): JSX.Element {

        return (<NeonBox {...boxProps(this.props)}>

            <button
                disabled={this.props.disabled}
                style={getNeonButtonStyle(this.props.theme)}
                className={mergeClasses(
                    this._buttonStyle.button,
                    this._peekStyle.peek,
                    this._getSizeClass(),
                    assertIfTrue(this.props.circle, 'circle'),
                    assertIfTrue(this.props.disabled, this._buttonStyle.disabled),
                )}
                tabIndex={fixTabIndex(this.props.tabIndex)}
                onClick={() => this.props.onClick && this.props.onClick()}
                {...this._getMouseHandlers()}>
                {this.state.hovering ? this.props.expend : this.props.children}
            </button>
        </NeonBox>);
    }

    private _getMouseHandlers(): Record<string, any> {

        if (this.props.expend) {
            return {
                onMouseEnter: this._handleMouseEnter,
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

export const NeonPeek: ThemedComponent<NeonPeekProps> = withConsumer<NeonPeekProps>(NeonPeekBase);
