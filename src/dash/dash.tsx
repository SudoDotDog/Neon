/**
 * @author WMXPY
 * @namespace Neon_Dash
 * @description Dash
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { SIGNAL } from "../declare/index";
import { NeonDashStyle } from "./style/dash";

export type NeonDashProps = {

    readonly onClick?: () => void;
    readonly onDash?: () => void;
    readonly dash?: SIGNAL;

    readonly disabled?: boolean;
    readonly tabIndex?: number;
    readonly buttonClassName?: string;

    readonly children?: any;
} & ThemeProps & BoxProps;

export type NeonDashStates = {

    readonly hovering: boolean;
};

export class NeonDashBase extends React.Component<NeonDashProps> {

    public readonly state: NeonDashStates = {

        hovering: false,
    };

    private readonly _dashStyle: Classes = NeonDashStyle.use();

    public constructor(props: NeonDashProps) {

        super(props);

        this._handleMouseEnter = this._handleMouseEnter.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    public render(): JSX.Element {

        return (
            <NeonBox {...boxProps(
                this.props,
                this._dashStyle.wrap,
            )}>
                <button
                    disabled={this.props.disabled}
                    className={mergeClasses(
                        this.props.buttonClassName,
                        this._dashStyle.button,
                        assertIfTrue(this.props.disabled, this._dashStyle.disabledButton),
                    )}
                    tabIndex={this.props.tabIndex}
                    onClick={() => this.props.onClick && this.props.onClick()}>
                    {this.props.children}
                </button>
                {this._renderDash()}
            </NeonBox>);
    }

    private _renderDash(): React.ReactNode {

        if (this.props.onDash) {
            return (<button
                disabled={this.props.disabled}
                style={this._getDashStyle()}
                className={mergeClasses(
                    this._dashStyle.dashClickable,
                    this._getSignalClass(),
                    assertIfTrue(this.props.disabled, this._dashStyle.disabledButton),
                    assertIfTrue(this.props.disabled, this._dashStyle.disabledDash),
                )}
                onClick={() => this.props.onDash && this.props.onDash()}
                onMouseEnter={this._handleMouseEnter}
                onMouseLeave={this._handleMouseLeave}
            />);
        }

        if (this.props.dash) {
            return (<div
                style={this._getDashStyle()}
                className={mergeClasses(
                    this._dashStyle.dash,
                    this._getSignalClass(),
                    assertIfTrue(this.props.disabled, this._dashStyle.disabledButton),
                    assertIfTrue(this.props.disabled, this._dashStyle.disabledDash),
                )}
            />);
        }

        return null;
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

    private _getDashStyle(): React.CSSProperties {

        if (this.state.hovering) {
            return {
                width: '1rem',
                height: '1rem',
            };
        }
        return {
            width: '0.5rem',
            height: '0.5rem',
        };
    }

    private _getSignalClass(): string {

        switch (this.props.dash) {
            case SIGNAL.ERROR: return this._dashStyle.error;
            case SIGNAL.WARNING: return this._dashStyle.warning;
            case SIGNAL.SUCCEED: return this._dashStyle.succeed;
            case SIGNAL.PLAIN:
            default: return this._dashStyle.plain;
        }
    }
}

export const NeonDash: ThemedComponent<NeonDashProps> = withConsumer<NeonDashProps>(NeonDashBase);
