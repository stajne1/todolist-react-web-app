import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../reducer/actions';
import { visibilityFilters } from '../constants';
import { AppBar, Toolbar, Radio, FormControlLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const WhiteRadio = withStyles({
    root: {
      color: '#e3f2fd',
      '&$checked': {
        color: '#e3f2fd',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

class VisibilityFilters extends Component {

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    {visibilityFilters.map(filter => {
                        return (
                            <FormControlLabel
                                key={filter.key}
                                control={
                                    <WhiteRadio
                                        checked={filter.key === this.props.visibilityFilter}
                                        onChange={e => this.props.setVisibilityFilter(e.target.value)}
                                        value={filter.key}
                                        name='visibility-filter' />
                                }
                                label={filter.value}
                            />
                        )
                    })}
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = state => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibilityFilter: (visibilityFilter) => dispatch(actions.setVisibilityFilter(visibilityFilter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters);