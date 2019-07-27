import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../reducer/actions';
import FilterLink from '../components/FilterLink'
import { visibilityFilters } from '../constants';

class VisibilityFilters extends Component {
    render(){
        return(
            <div className='visibility-filter'>
                {visibilityFilters.map(filter => {
                    return <FilterLink
                        key={filter.key}
                        isSelected={filter.key === this.props.visibilityFilter}
                        filterText={filter.value}
                        filterKey={filter.key}
                        click={this.props.setVisibilityFilter}
                    />
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setVisibilityFilter: (visibilityFilter) => dispatch(actions.setVisibilityFilter(visibilityFilter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters);