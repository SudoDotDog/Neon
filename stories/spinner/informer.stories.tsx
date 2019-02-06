/**
 * @author WMXPY
 * @namespace Stories_Spinner
 * @description Informer
 */

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonInformer } from "../../src/spinner";
import { NeonInformerBase } from "../../src/spinner/informer";
import { wInfo } from "../util";
import InformerMDX from "./informer.mdx";

const componentStories = storiesOf('Components', module);

componentStories.add(
    'Informer',
    wInfo([NeonInformerBase], [NeonInformer, InformerMDX])(() => {

        const message: string = text('Message', 'A message');
        const hidden: boolean = boolean('Hidden', false);

        return (<InformerMDX message={message} hidden={hidden} />);
    }),
);

