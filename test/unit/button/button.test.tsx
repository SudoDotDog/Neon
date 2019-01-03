/**
 * @author WMXPY
 * @namespace Neon_Button
 * @description Button
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { NeonButton, NeonButtonProps } from "../../../src/button";

describe('Given a <Box /> Component', (): void => {

    const chance: Chance.Chance = new Chance('neon-button');

    const getDefaultProps = (): NeonButtonProps => ({

        onClick: () => undefined,
    });

    const render = (props: NeonButtonProps = getDefaultProps(), children: any = chance.string()) => {

        return shallow(<NeonButton {...props}>
            {children}
        </NeonButton>);
    };

    it('should render a button element', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal('div');
    });
});
