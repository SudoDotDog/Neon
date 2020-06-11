/**
 * @author WMXPY
 * @namespace Neon_Input
 * @description Editable
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { NeonBox } from '../../../src/#common/components/box';
import { NeonEditableProps, NeonInput } from "../../../src/input";
import { NeonEditableBase } from '../../../src/input/editable';
import { getDefaultTheme } from '../../../src/theme/declare';

describe('Given a <Editable /> Component', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('neon-input-editable');

    const getDefaultProps = (): NeonEditableProps => ({

        theme: getDefaultTheme(),
    });

    const render = (props: NeonEditableProps = getDefaultProps()) => {

        return shallow(
            (<NeonEditableBase {...props} />),
        );
    };

    it('should render a box element', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(NeonBox);
    });

    it('should have non editable element', (): void => {

        const props: NeonEditableProps = {
            ...getDefaultProps(),
        };

        const component: ShallowWrapper = render(props);

        const divs = component.find('div');

        expect(divs).to.have.lengthOf(2);
        expect(divs.get(0).type).to.be.equal('div');
        expect(divs.get(1).type).to.be.equal('div');
    });

    it('should have editable element', (): void => {

        const props: NeonEditableProps = {
            ...getDefaultProps(),
        };

        const component: ShallowWrapper = render(props);
        component.setState({
            editing: true,
        });

        expect(component.type()).to.be.equal(NeonInput);
    });
});
