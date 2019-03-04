/**
 * @author WMXPY
 * @namespace Neon_Float
 * @description Float
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { mergeClasses } from "../#common/style/decorator";
import { NeonCoin, NeonCoinCut } from "../button/coin";
import { NeonMenuItemElement } from "../menu/declare";
import { NeonMenuItem } from "../menu/item";
import { NeonMenu } from "../menu/menu";
import { NeonFloatStyle } from "./style/float";

export type NeonFloatProps = {

    readonly list?: NeonMenuItemElement[];

    readonly children?: any;
} & NeonCoinCut & BoxProps;

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
                onMouseEnter={this._handleMouseEnter}
                onMouseLeave={this._handleMouseLeave}
            >
                <NeonCoin
                    {...boxProps(this.props)}
                    circle={this.props.circle}
                    disabled={this.props.disabled}
                    buttonClassName={this.props.buttonClassName}
                    tabIndex={this.props.tabIndex}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </NeonCoin>
                {this._renderDropdown()}
            </div>
        );
    }

    private _renderDropdown(): React.ReactNode {

        if (!this.state.hovering) {
            return null;
        }

        if (!this.props.list) {
            return null;
        }

        return (<NeonMenu
            className={this._floatStyle.menu}
            reverse
            borderless
        >
            {this.props.list.map((element: NeonMenuItemElement, index: number) =>
                (<NeonMenuItem
                    key={element.key || index}
                    onClick={this._createElementClickFunction(element.onClick)}>
                    {element.children}
                </NeonMenuItem>),
            )}
        </NeonMenu>);
    }

    private _createElementClickFunction(onClick?: () => void) {

        return () => {

            this._handleMouseLeave();
            if (onClick) {
                onClick();
            }
        };
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

export const NeonFloat: React.ComponentType<NeonFloatProps> = NeonFloatBase;
