/**
 * @author WMXPY
 * @namespace Neon_Common_Components
 * @description Separator
 */

import { Classes } from "jss";
import * as React from "react";
import { ThemedComponent, ThemeProps, withConsumer } from "../consumer";
import { COLOR } from "../declare";
import { JSSStyle } from "../style/decorator";
import { NeonStyle } from "../style/style";

const NeonSeparatorStyleBase: JSSStyle = {

    separator: {

        marginTop: '0.1rem',
        marginBottom: '0.1rem',

        height: '0.1rem',
        backgroundColor: COLOR.GRAY,
    },
};

const NeonSeparatorStyle: NeonStyle = NeonStyle.create(NeonSeparatorStyleBase, 'Separator');

export type NeonSeparatorProps = ThemeProps;

export const NeonSeparatorBase: React.FC<NeonSeparatorProps> = () => {

    const separatorStyle: Classes = NeonSeparatorStyle.use();

    return <div className={separatorStyle.separator} />;
};

export const NeonSeparator: ThemedComponent<NeonSeparatorProps> = withConsumer<NeonSeparatorProps>(NeonSeparatorBase);
