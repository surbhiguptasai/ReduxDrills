import React from 'react';
import {shallow} from 'enzyme';

import {newGame} from '../actions';
import {toggleInfoModal} from '../actions';
import {TopNav} from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Dispatches toggleInfoModal when the close button is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        wrapper.find('.what').simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
    });
    it('Dispatches newGame when the close button is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        wrapper.find('.new').simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
        
    });
});