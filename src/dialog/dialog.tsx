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
import { assertIfTri, mergeClasses } from "../#common/style/decorator";
import { NeonDialogStyle } from "./style/dialog";

export type NeonDialogProps = {

    show?: boolean;
    blur?: boolean;

    children?: any;
} & BoxProps & ThemeProps;

export type NeonDialogStates = {

    readonly visible?: boolean;

};

export class NeonDialogBase extends React.Component<NeonDialogProps, NeonDialogStates> {

    public state: NeonDialogStates = {

        visible: false,
    };

    private readonly _dialogStyle: Classes = NeonDialogStyle.use();
    private _timer: any = null;

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
            <div className={mergeClasses(
                this._dialogStyle.fixed,
                this._dialogStyle.center,
                this._dialogStyle.traverse,
                assertIfTri(this.state.visible, this._dialogStyle.visible, this._dialogStyle.invisible),
            )}>
                <NeonBox
                    ignoreTheme
                    {...boxProps(
                        this.props,
                        this._dialogStyle.box,
                    )}
                >
                    {this.props.children}
                </NeonBox>
            </div>
        </React.Fragment>);
    }

    private _updateVisibility() {

        clearTimeout(this._timer);
        if (this.props.show) {
            this._timer = setTimeout(() => this.setState({
                visible: Boolean(this.props.show),
            }), 10);
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
