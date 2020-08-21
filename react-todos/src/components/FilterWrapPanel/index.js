import React from 'react';
import FilterPanelBind from '../FilterPanelBind.js';
import { FILTER_TYPE } from '../../store/index.js';

function FilterWrapPanel() {
    return (
        <div>
            <FilterPanelBind filterType={ FILTER_TYPE.ALL }>all</FilterPanelBind>
            <FilterPanelBind filterType={ FILTER_TYPE.COMPLETE }>complete</FilterPanelBind>
            <FilterPanelBind filterType={ FILTER_TYPE.UNCOMPLETE }>uncomplete</FilterPanelBind>
        </div>
    );
}

export default FilterWrapPanel;