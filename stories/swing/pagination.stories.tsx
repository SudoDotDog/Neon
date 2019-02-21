/**
 * @author WMXPY
 * @namespace Stories_Swing
 * @description Pagination
 */

import { number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonPagination } from "../../src/swing";
import { NeonPaginationBase } from "../../src/swing/pagination";
import { createAction, wInfo } from "../util";
import PaginationMDX from "./pagination.mdx";

const componentStories = storiesOf('Swing', module);
const events = createAction();

componentStories.add(
    'Pagination',
    wInfo([NeonPaginationBase], [NeonPagination, PaginationMDX])(() => {

        const element: string = text('Element', '★');
        const size: number = number('Size', 10);
        const selected: number = number('Selected', 2);

        return (<PaginationMDX
            element={element}
            size={size}
            selected={selected}
            events={events}
        />);
    }),
);
