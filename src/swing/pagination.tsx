/**
 * @author WMXPY
 * @namespace Neon_Swing
 * @description Pagination
 */

import { Classes } from "jss";
import * as React from "react";
import { boxProps, NeonBox } from "../#common/components/box";
import { ThemedComponent, ThemeProps, withConsumer } from "../#common/consumer";
import { BoxProps } from "../#common/declare";
import { assertIfTrue, mergeClasses } from "../#common/style/decorator";
import { NeonPaginationStyle } from "./style/pagination";

export type NeonPaginationProps = {

    readonly element: string;
    readonly selected: number;
    readonly size?: number;
    readonly onChange?: (picked: number) => void;
} & ThemeProps & BoxProps;

export type NeonPaginationStates = {

    readonly currentHover: number;
};

export class NeonPaginationBase extends React.Component<NeonPaginationProps, NeonPaginationStates> {

    public readonly state: NeonPaginationStates = {

        currentHover: 0,
    };

    private _paginationStyle: Classes = NeonPaginationStyle.use();

    public render(): React.ReactNode {

        const size: number = this.props.size || 5;

        return (<NeonBox
            divAttributes={{
                onMouseLeave: this._createHandlerMouseLeaveFunction(),
            }}
            {...boxProps(this.props)}>
            {new Array(size).fill(undefined).map((_, index: number) => {

                const position: number = index + 1;

                return (<button
                    onMouseEnter={this._createHandleMouseEnterFunction(position)}
                    onClick={this._createHandleClickFunction(position)}
                    className={mergeClasses(
                        this._paginationStyle.button,
                        assertIfTrue(this.state.currentHover >= position, this._paginationStyle.hovering),
                        assertIfTrue(this.props.selected >= position, this._paginationStyle.selecting),
                    )}
                >
                    {this.props.element}
                </button>);
            })}
        </NeonBox>);
    }

    private _createHandleClickFunction(position: number): (() => void) | undefined {

        if (this.props.onChange) {

            const onChange: (picked: number) => void = this.props.onChange;
            return () => onChange(position);
        }
        return undefined;
    }

    private _createHandleMouseEnterFunction(position: number): () => void {

        return () => this.setState({ currentHover: position });
    }

    private _createHandlerMouseLeaveFunction(): () => void {

        return () => this.setState({ currentHover: 0 });
    }
}

export const NeonPagination: ThemedComponent<NeonPaginationProps> = withConsumer<NeonPaginationProps>(NeonPaginationBase);
