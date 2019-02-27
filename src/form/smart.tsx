/**
 * @author WMXPY
 * @namespace Neon_From
 * @description Smart
 */

import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { BoxProps } from "../#common/declare";
import { NeonButton } from "../button";
import { MARGIN, SIGNAL, SIZE, WIDTH } from "../declare";
import { NeonFlag, NeonFlagCut, NeonSticker, NeonStickerCut } from "../flag";
import { NeonIndicator } from "../spinner";
import { NeonTitle } from "../typography/title";
import { NeonSmartPoll } from "./poll";
import { NeonFromStructure } from "./structure";

export type NeonSmartFormProps = {

    readonly title?: string;
    readonly titleBorderless?: boolean;
    readonly titleSize?: SIZE;

    readonly flag?: NeonFlagCut;
    readonly cover?: NeonStickerCut;

    readonly loading?: boolean;

    readonly form: NeonFromStructure;
    readonly onChange?: <T extends Record<string, any>>(value: T) => void;
    readonly value?: Record<string, any>;

    readonly rift?: MARGIN;
    readonly submit?: string;
    readonly onSubmit?: () => void;
} & BoxProps;

export class NeonSmartForm extends React.Component<NeonSmartFormProps> {

    public render(): React.ReactNode {

        return (
            <NeonIndicator
                {...boxProps(this.props)}
                loading={this.props.loading}
                covering={Boolean(this.props.cover)}
                cover={this._renderSticker()}
            >
                {this._renderTitle()}
                {this._renderWarning()}
                {this._renderForm()}
                {this._renderSubmit()}
            </NeonIndicator>
        );
    }

    private _renderSticker(): React.ReactNode | undefined {

        if (!this.props.cover) {
            return undefined;
        }

        const { type = SIGNAL.SUCCEED,
            title = 'Complete',
            info,
            peek,
            peekCorner,
        } = this.props.cover;

        return (<NeonSticker
            ignoreTheme
            type={type}
            title={title}
            info={info}

            peek={peek}
            peekCorner={peekCorner}
        />);
    }

    private _renderTitle(): React.ReactNode {

        if (!Boolean(this.props.title)) {
            return null;
        }

        return (<NeonTitle
            ignoreTheme
            margin={this._getMargin()}
            removeBorder={this.props.titleBorderless}
            size={this.props.titleSize}
        >
            {this.props.title}
        </NeonTitle>);
    }

    private _renderWarning(): React.ReactNode {

        if (!this.props.flag) {
            return null;
        }

        return (<NeonFlag
            ignoreTheme
            margin={this._getMargin()}

            type={this.props.flag.type}
            info={this.props.flag.info}
            message={this.props.flag.message}
        />);
    }

    private _renderForm(): React.ReactNode {

        const value: Record<string, any> = this.props.value || {};
        const onChange: (content: any) => void = this.props.onChange || (() => undefined);

        return (<NeonBox
            ignoreTheme
            margin={this._getMargin()}
        >
            <NeonSmartPoll
                rift={this._getMargin()}
                value={value}
                structure={this.props.form}

                onChange={onChange}
                onEnter={this.props.onSubmit}
            />
        </NeonBox>);
    }

    private _renderSubmit(): React.ReactNode {

        if (!this.props.onSubmit) {
            return null;
        }

        return (<NeonButton
            key="__neon_submit_button"
            width={WIDTH.FULL}
            size={SIZE.MEDIUM}
            onClick={this.props.onSubmit}
            ignoreTheme
            margin={this._getMargin()}
        >
            {this.props.submit || 'Submit'}
        </NeonButton>);
    }

    private _getMargin(): MARGIN {

        return this.props.rift || MARGIN.SMALL;
    }
}
