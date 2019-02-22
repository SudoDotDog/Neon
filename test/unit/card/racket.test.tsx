/**
 * @author WMXPY
 * @namespace Neon_Card
 * @description Card
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { NeonBox } from '../../../src/#common/components/box';
import { NeonCardProps } from "../../../src/card";
import { NeonCardBase } from '../../../src/card/card';
import { getDefaultTheme } from '../../../src/theme/declare';

describe('Given a <Racket /> Component', (): void => {

    const chance: Chance.Chance = new Chance('neon-card-racket');

    const getDefaultProps = (): NeonCardProps => ({

        theme: getDefaultTheme(),
    });

    const render = (props: NeonCardProps = getDefaultProps(), children: any = chance.string()) => {

        return shallow(
            (<NeonCardBase {...props}>
                {children}
            </NeonCardBase>),
        );
    };

    it('should render a card element', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(NeonBox);
    });
});
