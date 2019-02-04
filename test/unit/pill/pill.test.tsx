/**
 * @author WMXPY
 * @namespace Neon_Pill
 * @description Pill
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { NeonBox } from '../../../src/#common/components/box';
import { NeonInputProps } from "../../../src/input";
import { NeonPillBase } from "../../../src/pill/pill";
import { getDefaultTheme } from '../../../src/theme/declare';

describe('Given a <Pill /> Component', (): void => {

    const chance: Chance.Chance = new Chance('neon-pill-pill');

    const getDefaultProps = (): NeonInputProps => ({

        theme: getDefaultTheme(),
    });

    const render = (props: NeonInputProps = getDefaultProps(), children: any = chance.string()) => {

        return shallow(
            (<NeonPillBase {...props}>{children}</NeonPillBase>),
        );
    };

    it('should render a box element', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(NeonBox);
    });
});
