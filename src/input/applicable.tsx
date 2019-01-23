/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Applicable
 */

import * as React from "react";
import { NeonBox } from "../#common/components/box";
import { ThemeProps } from "../#common/consumer";
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
};

export class NeonApplicable extends React.Component<NeonApplicableProps, NeonApplicableStates> {

    public static readonly defaultProps: Partial<NeonApplicableProps> = {

        apply: 'Apply',
        type: INPUT_TYPE.TEXT,
    };

    public readonly state: NeonApplicableStates = {

        value: '',
    };

    private _lastValue: any;

    public constructor(props: NeonApplicableProps) {

        super(props);
        this._lastValue = null;
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
                onChange={(value: any) => this.setState({ value })}
            />
            <NeonButton
                className={this._getButtonClass()}
                size={SIZE.RELATIVE}
            >
                {this.props.apply}
            </NeonButton>
        </NeonBox>);
    }

    private _getButtonClass(): string {

        switch (this.props.size) {

            case SIZE.MEDIUM: return NeonApplicableStyle.buttonMedium;
            case SIZE.LARGE: return NeonApplicableStyle.buttonLarge;
            case SIZE.NORMAL:
            default: return NeonApplicableStyle.buttonNormal;
        }
    }
}
