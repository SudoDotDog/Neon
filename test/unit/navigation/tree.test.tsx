/**
 * @author WMXPY
 * @namespace Neon_Navigation
 * @description Tree
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { NeonBox } from '../../../src/#common/components/box';
import { NeonTreeProps } from "../../../src/navigation";
import { NeonTreeBase } from '../../../src/navigation/tree';
import { getDefaultTheme } from '../../../src/theme/declare';

describe('Given a <Tree /> Component', (): void => {

    const chance: Chance.Chance = new Chance('neon-navigation-tree');

    const getDefaultProps = (): NeonTreeProps => ({

        theme: getDefaultTheme(),

        tree: [],
    });

    const render = (props: NeonTreeProps = getDefaultProps(), children: any = chance.string()) => {

        return shallow(
            (<NeonTreeBase {...props}>
            </NeonTreeBase>),
        );
    };

    it('should render a box element', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(NeonBox);
    });
});
