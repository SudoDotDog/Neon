/**
 * @author WMXPY
 * @namespace Neon_Grid
 * @description Grid
 */

import { Classes } from "jss";
import * as React from "react";
import { ThemeProps } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { NeonGridStyle } from "./style/grid";

export type NeonGridProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export type NeonGridStates = {

};

export class NeonGridBase extends React.Component<NeonGridProps, NeonGridStates> {

    public readonly state: NeonGridStates = {
    };

    private readonly _gridStyle: Classes = NeonGridStyle.use();

    public constructor(props: NeonGridProps) {

        super(props);
    }

    public render(): JSX.Element {

        return (
            <div className={this._gridStyle.grid}>
                123
            </div>
        );
    }
}

export const NeonGrid: React.ComponentType<NeonGridProps> = NeonGridBase;
