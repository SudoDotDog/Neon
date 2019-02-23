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
import { INPUT_TYPE } from "../input";
import { NeonInput } from "../input/input";
import { NeonTitle } from "../typography/title";
import { NeonDialog, NeonDialogCut } from "./dialog";
import { NeonGatherStyle } from "./style/gather";

export type NeonGatherProps = {

    readonly title?: string;

    readonly label?: string;
    readonly type?: INPUT_TYPE;

    readonly children?: any;
} & NeonDialogCut & BoxProps;

export type NeonGatherStates = {

    readonly current: string;
};

export class NeonGatherBase extends React.Component<NeonGatherProps, NeonGatherStates> {

    public state: NeonGatherStates = {

        current: '',
    };

    private _gatherStyle: Classes = NeonGatherStyle.use();

    public constructor(props: NeonGatherProps) {

        super(props);

        this._handleChange = this._handleChange.bind(this);
    }

    public render(): React.ReactNode {

        return (<NeonDialog
            {...boxProps(this.props)}
            show={this.props.show}
            blur={this.props.blur}
        >
            <div className={this._gatherStyle.grid}>
                {this._renderTitle()}
                {this._renderContent()}
                {this._renderInput()}
                {this._renderAction()}
            </div>
        </NeonDialog>);
    }

    private _renderTitle(): React.ReactNode {

        if (!this.props.title) {
            return null;
        }

        return (<NeonTitle
            ignoreTheme
            size={SIZE.MEDIUM}
            className={this._gatherStyle.title}
        >
            {this.props.title}
        </NeonTitle>);
    }

    private _renderContent(): React.ReactNode {

        return (<div className={this._gatherStyle.content}>
            {this.props.children}
        </div>);
    }

    private _renderInput(): React.ReactNode {

        return (<NeonInput
            ignoreTheme
            autofocus
            className={this._gatherStyle.input}
            label={this.props.label}
            value={this.state.current}
            onChange={this._handleChange}
        />);
    }

    private _renderAction(): React.ReactNode {

        return (<div className={this._gatherStyle.action}>
            Action
        </div>);
    }

    private _handleChange(newValue: string): void {

        this.setState({
            current: newValue,
        });
    }
}

export const NeonGather: React.ComponentType<NeonGatherProps> = NeonGatherBase;
