/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Input
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { NeonBox } from '../../../src/#common/components/box';
import { NeonInputProps } from "../../../src/input";
import { NeonInputBase } from '../../../src/input/input';
import { getDefaultTheme } from '../../../src/theme/declare';
import { Sandbox } from "../../mock/sandbox/sandbox";

describe('Given a <Input /> Component', (): void => {

    const chance: Chance.Chance = new Chance('neon-input-input');

    const getDefaultProps = (): NeonInputProps => ({

        theme: getDefaultTheme(),
    });

    const render = (props: NeonInputProps = getDefaultProps()) => {

        return shallow(
            (<NeonInputBase {...props} />),
        );
    };

    it('should render a box element', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(NeonBox);
    });

    it('should be able to call onChange', (): void => {

        const onChange: Sandbox = new Sandbox();
        const props: NeonInputProps = {
            ...getDefaultProps(),
            onChange: onChange.func(),
        };

        const component: ShallowWrapper = render(props);

        component.find('input').simulate('change', {
            target: {
                value: chance.string(),
            },
        });

        expect(onChange.calls()).to.be.lengthOf(1);
    });
});
