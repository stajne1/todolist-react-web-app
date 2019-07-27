import React from 'react';
const Filterlink = props => (
    <p 
        className={!props.isSelected ? 'active' : null}
        onClick={() => !props.isSelected ? props.click(props.filterKey) : null}
    >
        {props.filterText}
    </p>
);
export default Filterlink;