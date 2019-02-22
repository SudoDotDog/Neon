/**
 * @author WMXPY
 * @namespace Neon_Dialog
 * @description Gather
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { INPUT_TYPE } from "../input";
import { NeonInput } from "../input/input";
import { NeonDialog, NeonDialogCut } from "./dialog";
import { NeonGatherStyle } from "./style/gather";

export type NeonGatherProps = {

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

    public render(): React.ReactNode {

        return (<NeonDialog
            {...boxProps(this.props)}
            show={this.props.show}
            blur={this.props.blur}
        >
            <div className={this._gatherStyle.grid}>
                <NeonInput
                    autofocus
                    label={this.props.label}
                    value={this.state.current}
                />
            </div>
        </NeonDialog>);
    }
}

export const NeonGather: React.ComponentType<NeonGatherProps> = NeonGatherBase;
