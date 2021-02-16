import React from 'react';
import {shallow} from 'enzyme';
import PropertyListing from '../PropertyListing';

describe('PropertyListing', () => {

    it('should render without crashing', () => {
        const wrapper = shallow(<PropertyListing/>);
        expect(wrapper.find('.PropertyListing')).toHaveLength(1);
    });

    it('should render 0 property cards', () => {
        const wrapper = shallow(<PropertyListing/>);
        expect(wrapper.find('PropertyCard')).toHaveLength(0);
    });

    
});
