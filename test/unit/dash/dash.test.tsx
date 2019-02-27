/**
 * @author WMXPY
 * @namespace Neon_Dash
 * @description Dash
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { NeonBox } from '../../../src/#common/components/box';
import { NeonDashProps } from "../../../src/dash";
import { NeonDashBase } from '../../../src/dash/dash';
import { getDefaultTheme } from '../../../src/theme/declare';

describe('Given a <Dash /> Component', (): void => {

    const chance: Chance.Chance = new Chance('neon-dash-dash');

    const getDefaultProps = (): NeonDashProps => ({

        theme: getDefaultTheme(),
    });

    const render = (props: NeonDashProps = getDefaultProps(), children: any = chance.string()) => {

        return shallow(
            (<NeonDashBase {...props}>
            </NeonDashBase>),
        );
    };

    it('should render a box element', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(NeonBox);
    });
});
