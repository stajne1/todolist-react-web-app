import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../reducer/actions';

class AddTodo extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
            error: ''
        }
    }

    textChange = e => {
        this.setState({
            todoText: e.target.value
        })
    }

    addTodo = () => {
        if(this.state.todoText) {
            this.props.addTodo(this.state.todoText);
            this.setState({todoText: ''});
        } else {
            this.setState({error: 'Please Enter Text'})
            setTimeout(() => this.setState({error: ''}), 3000);
        }
    }
    
    render() {
        return(
            <div>
                {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
                <input 
                    type="text" name='todoText' 
                    onChange={this.textChange} 
                    value={this.state.todoText} />
                <button 
                    onClick={this.addTodo}>
                    Add Todo
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = disapatch => {
    return {
        addTodo: text => disapatch(actions.addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);