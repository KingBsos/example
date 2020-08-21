import React from 'react';

function FilterPanel(props) {
    if(props.active) return (
        <span>{ props.children }</span>
    );
    return (
        <a href="#g" onClick={ props.onClick }>{ props.children }</a>
    );
}

export default FilterPanel;