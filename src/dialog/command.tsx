/**
 * @author WMXPY
 * @namespace Neon_Dialog
 * @description Command
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
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

export class NeonCommandBase extends React.Component<NeonCommandProps> {

    private readonly _gatherStyle: Classes = NeonGatherStyle.use();

    public render(): React.ReactNode {

        return (<NeonDialog
            {...boxProps(this.props)}
            title={this.props.title}
            onClose={this.props.onClose}
            show={this.props.show}
            blur={this.props.blur}
            size={this.props.size}
        >
            <div className={mergeClasses(
                this._gatherStyle.grid,
                this._gatherStyle.command,
            )}>
                {this._renderContent()}
                {this._renderInput()}
                {this._renderAction()}
            </div>
        </NeonDialog>);
    }

    private _renderContent(): React.ReactNode {

        return (<div className={this._gatherStyle.content}>
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
                autofocus
                size={SIZE.RELATIVE}
                tabIndex={0}
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
}

export const NeonCommand: React.ComponentType<NeonCommandProps> = NeonCommandBase;
