/**
 * @author WMXPY
 * @namespace Stories_Pivot
 * @description Footer
 */

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonFooter } from "../../src/pivot";
import { NeonFooterBase } from "../../src/pivot/footer";
import { wInfo } from "../util";
import FooterMDX from "./footer.mdx";

const componentStories = storiesOf('Pivot', module);

componentStories.add(
    'Footer',
    wInfo([NeonFooterBase], [NeonFooter, FooterMDX])(() => {

        const name: string = text('Name', 'Name');

        return (<FooterMDX
            name={name}
        />);
    }),
);
