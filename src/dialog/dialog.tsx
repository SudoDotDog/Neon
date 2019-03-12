/**
 * @author WMXPY
 * @namespace Neon_Dialog
 * @description Dialog
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTri, assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { NeonButton } from "../button/index";
import { SIZE } from "../declare";
import { NeonTitle } from "../typography/title";
import { NeonDialogStyle } from "./style/dialog";

export type NeonDialogCut = {

    readonly title?: string;
    readonly onClose?: () => void;

    readonly show?: boolean;
    readonly blur?: boolean;

    readonly size?: SIZE;
};

export type NeonDialogProps = {

    readonly children?: any;
} & NeonDialogCut & BoxProps & ThemeProps;

export type NeonDialogStates = {

    readonly visible: boolean;
};

export class NeonDialogBase extends React.Component<NeonDialogProps, NeonDialogStates> {

    public state: NeonDialogStates = {

        visible: false,
    };

    private readonly _dialogStyle: Classes = NeonDialogStyle.use();

    public componentDidMount() {

        this._updateVisibility();
    }

    public componentDidUpdate(lastProps: NeonDialogProps) {

        if (lastProps.show !== this.props.show) {
            this._updateVisibility();
        }
    }

    public render(): React.ReactNode {

        if (!this.props.show) {
            return null;
        }

        return (<React.Fragment>
            {this._renderBlur()}
            <div
                className={mergeClasses(
                    this._dialogStyle.fixed,
                    this._dialogStyle.center,
                    this._dialogStyle.traverse,
                    assertIfTri(this.state.visible, this._dialogStyle.visible, this._dialogStyle.invisible),
                )}
                onClick={() => {
                    if (this.props.onClose) {
                        this.props.onClose();
                    }
                }}
            >
                <NeonBox
                    divAttributes={{
                        onClick: (event: React.MouseEvent<HTMLDivElement>) => {

                            if (this.props.onClose) {
                                event.stopPropagation();
                            }
                        },
                    }}
                    ignoreTheme
                    {...boxProps(
                        this.props,
                        this._dialogStyle.box,
                        this._getSizeClass(),
                    )}
                >
                    {this._renderTitle()}
                    {this._renderContent()}
                </NeonBox>
            </div>
        </React.Fragment>);
    }

    private _renderTitle(): React.ReactNode {

        if (!this.props.title) {
            return null;
        }

        return (<div className={this._dialogStyle.area}>
            {this.props.onClose && <NeonButton
                ignoreTheme
                onClick={this.props.onClose}
                size={SIZE.RELATIVE}
                className={this._dialogStyle.topButton}
            >
                X
            </NeonButton>}
            <NeonTitle
                ignoreTheme
                removeBorder={Boolean(this.props.onClose)}
                size={SIZE.MEDIUM}
            >
                {this.props.title}
            </NeonTitle>
        </div>);
    }

    private _renderContent(): React.ReactNode {

        return (<div
            className={mergeClasses(
                this._dialogStyle.content,
                assertIfTrue(Boolean(this.props.title), this._dialogStyle.tinyMargin),
            )}
        >
            {this.props.children}
        </div>);
    }

    private _getSizeClass(): string {

        switch (this.props.size) {
            case SIZE.NORMAL: return this._dialogStyle.normal;
            case SIZE.LARGE: return this._dialogStyle.large;
            case SIZE.FULL: return this._dialogStyle.full;
            case SIZE.RELATIVE: return this._dialogStyle.relative;
            case SIZE.MEDIUM:
            default: return this._dialogStyle.medium;
        }
    }

    private _updateVisibility() {

        if (this.props.show) {
            setImmediate(() => this.setState({
                visible: Boolean(this.props.show),
            }));
        } else {
            this.setState({
                visible: false,
            });
        }
    }

    private _renderBlur(): React.ReactNode {

        if (!this.props.blur) {

            return null;
        }

        return (<div
            className={mergeClasses(
                this._dialogStyle.fixed,
                this._dialogStyle.grayOut,
                this._dialogStyle.traverse,
                assertIfTri(this.state.visible, this._dialogStyle.visible, this._dialogStyle.invisible),
            )}
        />);
    }
}

export const NeonDialog: ThemedComponent<NeonDialogProps> = withConsumer<NeonDialogProps>(NeonDialogBase);
