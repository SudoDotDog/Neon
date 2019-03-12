/**
 * @author WMXPY
 * @namespace Neon_Dialog
 * @description Gather
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { SIZE } from "../declare/index";
import { NeonSmartPoll, NeonSmartPollCut } from "../form/poll";
import { NeonButtonGroup, NeonButtonGroupElement } from "../swing/group";
import { NeonDialog, NeonDialogCut } from "./dialog";
import { NeonGatherStyle } from "./style/gather";

export type NeonGatherProps = {

    readonly title?: string;
    readonly onClose?: () => void;
    readonly buttons?: NeonButtonGroupElement[];

    readonly children?: any;
} & NeonDialogCut & NeonSmartPollCut & BoxProps;

export class NeonGatherBase extends React.Component<NeonGatherProps> {

    private readonly _gatherStyle: Classes = NeonGatherStyle.use();

    public render(): React.ReactNode {

        return (<NeonDialog
            {...boxProps(this.props)}
            title={this.props.title}
            onClose={this.props.onClose}
            show={this.props.show}
            blur={this.props.blur}
        >
            <div className={mergeClasses(
                this._gatherStyle.grid,
                this._gatherStyle.gather,
            )}>
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
            rift,
            structure,
            value,
            onChange,
            onEnter = this.props.onEnter,
        }: NeonSmartPollCut = this.props;

        return (<div className={this._gatherStyle.input}>
            <NeonSmartPoll
                rift={rift}
                structure={structure}
                value={value}
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

export const NeonGather: React.ComponentType<NeonGatherProps> = NeonGatherBase;
