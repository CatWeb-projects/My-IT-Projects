import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    render() {
        const {title, id} = this.props.todo
        return (
            <div style={getStyle}>
                <input type="checkbox" checked={this.props.todo.completed} onChange={this.props.markComplete.bind(this, id)} /> {' '}
                <span style={this.props.todo.completed ? checkStyle : null}>{ title }</span>
                <button onClick={this.props.delTodo.bind(this, id)} style={buttonStyle}>X</button>
            </div>
        )
    }
}

const buttonStyle = {
    backgroundColor: 'orange',
    color: 'darkblue',
    borderRadius: '50%',
    border: 'none',
    padding: '5px 10px',
    float: 'right',
    cursor: 'pointer',
    outline: 'none'
}

const getStyle =  {
        
    backgroundColor: '#57cf2f',
    padding: '10px',
    borderBottom: '1px solid #ccc',
}

const checkStyle = {
    textDecoration: 'line-through',
    color: '#ccc'
}

// //PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    delTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired
}

export default TodoItem;
