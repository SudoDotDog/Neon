/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Applicable
 */

import * as React from "react";
import { NeonBox } from "../#common/components/box";
import { ThemeProps } from "../#common/consumer";
import { COLOR } from "../#common/declare";
import { NeonButton } from "../button";
import { MARGIN, SIZE } from "../declare/index";
import { INPUT_TYPE } from "./declare";
import { NeonInput } from "./input";
import { NeonApplicableStyle } from "./style";

export type NeonApplicableProps = {

    readonly label?: string;
    readonly apply?: string;
    readonly onApply?: (value: string) => void;

    readonly size?: SIZE;
    readonly style?: React.CSSProperties;
    readonly margin?: MARGIN;
    readonly type?: INPUT_TYPE;
} & ThemeProps;

export type NeonApplicableStates = {

    readonly value: any;
    readonly applicable: boolean;
};

export class NeonApplicable extends React.Component<NeonApplicableProps, NeonApplicableStates> {

    public static readonly defaultProps: Partial<NeonApplicableProps> = {

        apply: 'Apply',
        type: INPUT_TYPE.TEXT,
    };

    public readonly state: NeonApplicableStates = {

        value: '',
        applicable: true,
    };

    private _lastValue: any;

    public constructor(props: NeonApplicableProps) {

        super(props);

        this._lastValue = null;

        this._handleChange = this._handleChange.bind(this);
        this._handleApply = this._handleApply.bind(this);
    }

    public render() {

        return (<NeonBox
            style={this.props.style}
            margin={this.props.margin}
            className={NeonApplicableStyle.wrap}
        >
            <NeonInput
                className={NeonApplicableStyle.input}
                label={this.props.label}
                type={this.props.type}
                value={this.state.value}

                onChange={this._handleChange}
            />
            <NeonButton
                className={[this._getButtonSizeClass(), NeonApplicableStyle.button].join(' ')}
                size={SIZE.RELATIVE}
                style={{
                    transition: '0.2s all',
                    color: this.state.applicable ? undefined : COLOR.TRANSPARENT,
                }}

                onClick={this._handleApply}
            >
                {this.props.apply}
            </NeonButton>
        </NeonBox>);
    }

    private _handleChange(value: any): void {

        this.setState({
            value,
            applicable: this._lastValue !== value,
        });
    }

    private _handleApply(): void {

        if (!this.state.applicable) {
            return;
        }

        const currentValue: any = this.state.value;

        this._lastValue = currentValue;
        this.setState({
            applicable: false,
        });

        if (this.props.onApply) {
            this.props.onApply(this.state.value);
        }
    }

    private _getButtonSizeClass(): string {

        if (this.state.applicable) {

            switch (this.props.size) {

                case SIZE.MEDIUM: return NeonApplicableStyle.buttonMedium;
                case SIZE.LARGE: return NeonApplicableStyle.buttonLarge;
                case SIZE.NORMAL:
                default: return NeonApplicableStyle.buttonNormal;
            }
        }

        return NeonApplicableStyle.buttonDisable;
    }
}