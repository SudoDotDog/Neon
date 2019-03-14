/**
 * @author WMXPY
 * @namespace Hook
 * @description Mock
 */

import { configure } from 'enzyme';
const Adapter = require('enzyme-adapter-react-16.3');

const registerEnzyme = (): void => {

    configure({
        adapter: new Adapter(),
    });
};

registerEnzyme();
