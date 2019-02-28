/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Applicable
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemeProps } from "../#common/consumer";
import { COLOR } from "../#common/declare";
import { assertIfFalse, mergeClasses } from "../#common/style/decorator";
import { NeonButton } from "../button";
import { MARGIN, SIZE } from "../declare/index";
import { INPUT_TYPE } from "./declare";
import { NeonInput } from "./input";
import { NeonApplicableStyle } from "./style/applicable";

export type NeonApplicableProps = {

    readonly label?: string;
    readonly apply?: string;
    readonly defaultValue?: string;
    readonly onApply?: (value: string) => void;

    readonly className?: string;
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
        defaultValue: '',
        type: INPUT_TYPE.TEXT,
    };

    public readonly state: NeonApplicableStates = {

        value: this.props.defaultValue,
        applicable: true,
    };

    private _lastValue: any;

    private readonly _applicableStyle: Classes = NeonApplicableStyle.use();

    public constructor(props: NeonApplicableProps) {

        super(props);

        this._lastValue = null;

        this._handleChange = this._handleChange.bind(this);
        this._handleApply = this._handleApply.bind(this);
    }

    public render() {

        return (<NeonBox {...boxProps(this.props, this._applicableStyle.wrap)}>
            <NeonInput
                className={this._applicableStyle.input}
                label={this.props.label}
                type={this.props.type}
                value={this.state.value}

                onChange={this._handleChange}
                onEnter={this._handleApply}
            />
            <NeonButton
                className={mergeClasses(this._getButtonSizeClass(), this._applicableStyle.button)}
                size={SIZE.RELATIVE}
                style={{
                    transition: '0.2s all',
                    color: assertIfFalse(this.state.applicable, COLOR.TRANSPARENT),
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

                case SIZE.MEDIUM: return this._applicableStyle.buttonMedium;
                case SIZE.LARGE: return this._applicableStyle.buttonLarge;
                case SIZE.NORMAL:
                default: return this._applicableStyle.buttonNormal;
            }
        }

        return this._applicableStyle.buttonDisable;
    }
}
