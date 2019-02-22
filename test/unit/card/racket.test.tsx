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
import { NeonButton } from '../../../src/button/button';
import { NeonRacketProps } from "../../../src/card";
import { NeonRacketBase } from '../../../src/card/racket';
import { getDefaultTheme } from '../../../src/theme/declare';

describe('Given a <Racket /> Component', (): void => {

    const chance: Chance.Chance = new Chance('neon-card-racket');

    const getDefaultProps = (): NeonRacketProps => ({

        theme: getDefaultTheme(),
    });

    const render = (props: NeonRacketProps = getDefaultProps(), children: any = chance.string()) => {

        return shallow(
            (<NeonRacketBase {...props}>
            </NeonRacketBase>),
        );
    };

    it('should render a racket element', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(NeonButton);
    });
});
