/**
 * @author WMXPY
 * @namespace Neon_Common
 * @description Style
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { getBorder } from '../../../src/#common/style/decorator';

describe('Given [Common] Help functions', (): void => {

    const chance: Chance.Chance = new Chance('neon-common-style');

    it('should be able to get border with default width', (): void => {

        const color: string = chance.string();
        const border = getBorder(color);

        expect(border).to.be.deep.equal({

            borderColor: color,
            borderWidth: '0.2rem',
            borderStyle: 'solid',
        });
    });
});
