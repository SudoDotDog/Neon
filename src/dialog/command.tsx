/**
 * @author WMXPY
 * @namespace Neon_Dialog
 * @description Gather
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { SIZE } from "../declare/index";
import { NeonButtonGroup, NeonButtonGroupElement } from "../swing/group";
import { NeonTextField, NeonTextFieldCut } from "../text/field";
import { NeonDialog, NeonDialogCut } from "./dialog";
import { NeonGatherStyle } from "./style/gather";

export type NeonCommandProps = {

    readonly title?: string;
    readonly onClose?: () => void;
    readonly buttons?: NeonButtonGroupElement[];

    readonly children?: any;
} & NeonDialogCut & NeonTextFieldCut & BoxProps;

export type NeonCommandStates = {

    readonly current: string;
};

export class NeonCommandBase extends React.Component<NeonCommandProps, NeonCommandStates> {

    public state: NeonCommandStates = {

        current: '',
    };

    private readonly _gatherStyle: Classes = NeonGatherStyle.use();

    public constructor(props: NeonCommandProps) {

        super(props);

        this._handleChange = this._handleChange.bind(this);
    }

    public render(): React.ReactNode {

        return (<NeonDialog
            {...boxProps(this.props)}
            title={this.props.title}
            onClose={this.props.onClose}
            show={this.props.show}
            blur={this.props.blur}
        >
            <div className={this._gatherStyle.grid}>
                {this._renderContent()}
                {this._renderInput()}
                {this._renderAction()}
            </div>
        </NeonDialog>);
    }

    private _renderContent(): React.ReactNode {

        return (<div
            className={this._gatherStyle.content}
        >
            {this.props.children}
        </div>);
    }

    private _renderInput(): React.ReactNode {

        const {
            label,
            value,
            onBlur,
            onChange,
            onEnter,
        }: NeonTextFieldCut = this.props;

        return (<div className={this._gatherStyle.input}>
            <NeonTextField
                label={label}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onEnter={onEnter}
            />
        </div>);
    }

    private _renderAction(): React.ReactNode {

        if (!this.props.buttons) {
            return (<div className={this._gatherStyle.action} />);
        }

        return (<NeonButtonGroup
            ignoreTheme
            size={SIZE.MEDIUM}
            buttons={this.props.buttons}
            className={this._gatherStyle.action}
        />);
    }

    private _handleChange(newValue: string): void {

        this.setState({
            current: newValue,
        });
    }
}

export const NeonCommand: React.ComponentType<NeonCommandProps> = NeonCommandBase;
