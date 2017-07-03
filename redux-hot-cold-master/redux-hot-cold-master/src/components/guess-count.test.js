import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the count', () => {
        const count = 4;
        const wrapper = shallow(<GuessCount count={count} />);
        expect(wrapper.contains(count)).toEqual(true);
        expect(wrapper.text()).toEqual(`Guess #${count}!`);
    });
});