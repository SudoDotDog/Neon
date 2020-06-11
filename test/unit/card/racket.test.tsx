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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('neon-card-racket');

    const getDefaultProps = (): NeonRacketProps => ({

        theme: getDefaultTheme(),
    });

    const render = (props: NeonRacketProps = getDefaultProps()) => {

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
