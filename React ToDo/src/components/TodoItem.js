import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#57cf2f',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        } 
    }

    render() {
        const {title, id} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                <span>{ this.props.todo.title }</span>
                <button onClick={this.props.delTodo.bind(this, id)} style={buttonStyle}>X</button>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const buttonStyle = {
    backgroundColor: 'orange',
    color: 'darkblue',
    borderRadius: '50%',
    border: 'none',
    padding: '5px 10px',
    float: 'right',
    cursor: 'pointer'
}

export default TodoItem;
