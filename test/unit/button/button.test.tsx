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
import { NeonBox } from '../../../src/#common/components/box';
import { NeonButtonProps } from "../../../src/button";
import { NeonButtonBase } from '../../../src/button/button';
import { getDefaultTheme } from '../../../src/theme/declare';
import { Sandbox } from '../../mock/sandbox/sandbox';

describe('Given a <Box /> Component', (): void => {

    const chance: Chance.Chance = new Chance('neon-button-button');

    const getDefaultProps = (): NeonButtonProps => ({

        theme: getDefaultTheme(),
    });

    const render = (props: NeonButtonProps = getDefaultProps(), children: any = chance.string()) => {

        return shallow(
            (<NeonButtonBase {...props}>
                {children}
            </NeonButtonBase>),
        );
    };

    it('should render a button element', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(NeonBox);
    });

    it('should be able to click', (): void => {

        const onClick: Sandbox = new Sandbox();
        const props: NeonButtonProps = {
            ...getDefaultProps(),
            onClick: onClick.func(),
        };

        const component: ShallowWrapper = render(props);

        component.find('button').simulate('click');

        expect(onClick.calls()).to.be.lengthOf(1);
    });
});
