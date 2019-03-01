/**
 * @author WMXPY
 * @namespace Neon_Float
 * @description Float
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { NeonPeek } from "../button/peek";
import { NeonFloatStyle } from "./style/float";

export type NeonFloatProps = {

    readonly children?: any;
} & ThemeProps & BoxProps;

export type NeonFloatStates = {

    readonly hovering: boolean;
};

export class NeonFloatBase extends React.Component<NeonFloatProps> {

    public readonly state: NeonFloatStates = {

        hovering: false,
    };

    private readonly _floatStyle: Classes = NeonFloatStyle.use();

    public constructor(props: NeonFloatProps) {

        super(props);

        this._handleMouseEnter = this._handleMouseEnter.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    public render(): JSX.Element {

        return (
            <div
                className={mergeClasses(
                    this._floatStyle.float,
                )}
            >
                <NeonPeek
                    {...boxProps(
                        this.props,
                    )}
                >
                    {this.props.children}
                </NeonPeek>
            </div>
        );
    }

    private _handleMouseEnter() {

        this.setState({
            hovering: true,
        });
    }

    private _handleMouseLeave() {

        this.setState({
            hovering: false,
        });
    }
}

export const NeonFloat: ThemedComponent<NeonFloatProps> = withConsumer<NeonFloatProps>(NeonFloatBase);
