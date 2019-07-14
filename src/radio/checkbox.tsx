/**
 * @author WMXPY
 * @namespace Neon_Radio
 * @description Checkbox
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { SIZE } from "../declare/index";
import { NeonCheckboxStyle } from "./style/checkbox";

export type NeonCheckboxProps = {

    readonly size?: SIZE;

    readonly value: boolean;
    readonly onChange: (next: boolean) => void;

    readonly children?: any;
} & ThemeProps & BoxProps;

export type NeonCheckboxStates = {

    readonly hovering: boolean;
};

export class NeonCheckboxBase extends React.Component<NeonCheckboxProps, NeonCheckboxStates> {

    public readonly state: NeonCheckboxStates = {

        hovering: false,
    };

    private readonly _checkboxStyle: Classes = NeonCheckboxStyle.use();

    public render() {

        const classes: string[] = [
            this._checkboxStyle.wrap,
        ];

        return (<NeonBox
            {...boxProps(this.props, ...classes)}
            divAttributes={{
                onMouseEnter: () => this.setState({ hovering: true }),
                onMouseLeave: () => this.setState({ hovering: false }),
                onClick: () => this.props.onChange(!this.props.value),
            }}
        >
            <div className={this._getCheckboxClasses()} />
            <div className={this._getLabelClasses()}>
                {this.props.children}
            </div>
        </NeonBox>);
    }

    private _getCheckboxClasses(): string {

        const classes: string[] = [
            this._checkboxStyle.checkbox,
            this.props.value ? this._checkboxStyle.activated : this._checkboxStyle.inactivated,
        ];
        return mergeClasses(...classes) as string;
    }

    private _getLabelClasses(): string {

        const classes: Array<string | null> = [
            this._checkboxStyle.label,
            this.state.hovering ? this._checkboxStyle.hovering : null,
        ];
        return mergeClasses(...classes) as string;
    }
}

export const NeonCheckbox: ThemedComponent<NeonCheckboxProps> = withConsumer<NeonCheckboxProps>(NeonCheckboxBase);
