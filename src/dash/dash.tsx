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
import { NeonDashStyle } from "./style/dash";

export type NeonDashProps = {

    readonly onClick?: () => void;

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
                <button
                    disabled={this.props.disabled}
                    style={this._gerDashStyle()}
                    className={mergeClasses(
                        this._dashStyle.dash,
                        assertIfTrue(this.props.disabled, this._dashStyle.disabledButton),
                        assertIfTrue(this.props.disabled, this._dashStyle.disabledDash),
                    )}
                    onMouseEnter={this._handleMouseEnter}
                    onMouseLeave={this._handleMouseLeave}
                />
            </NeonBox>);
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

    private _gerDashStyle(): React.CSSProperties {

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
}

export const NeonDash: ThemedComponent<NeonDashProps> = withConsumer<NeonDashProps>(NeonDashBase);
