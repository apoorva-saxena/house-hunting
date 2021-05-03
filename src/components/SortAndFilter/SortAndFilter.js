import React from 'react';
import './SortAndFilter.scss';
import {priceOptions} from '../../constants'
import Dropdown from './Dropdown'
const SortAndFilter = ({handleChangeDropdown}) => {
    return (
        <div className="SortAndFilter">
            {/* <Dropdown options={priceOptions} label={'price'} onClick ={handleChangeDropdown}/> */}
            <Dropdown options={priceOptions} label={'bedroom'} onClick ={(value) => handleChangeDropdown(value, 'bedroom')}/>
        </div>
    );
};

export default SortAndFilter;
