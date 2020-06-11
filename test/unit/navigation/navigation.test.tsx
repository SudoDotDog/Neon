/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Navigation
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { NeonBox } from '../../../src/#common/components/box';
import { NeonNavigationProps } from "../../../src/navigation";
import { NeonNavigationBase } from '../../../src/navigation/navigation';
import { getDefaultTheme } from '../../../src/theme/declare';

describe('Given a <Navigation /> Component', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('neon-navigation-navigation');

    const getDefaultProps = (): NeonNavigationProps => ({

        theme: getDefaultTheme(),

        navigation: [],
    });

    const render = (props: NeonNavigationProps = getDefaultProps()) => {

        return shallow(
            (<NeonNavigationBase {...props}>
            </NeonNavigationBase>),
        );
    };

    it('should render a box element', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(NeonBox);
    });
});
