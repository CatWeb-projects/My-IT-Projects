import React from 'react'
import PropTypes from 'prop-types'

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    handleClick = (e) => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{display: 'flex'}}>
                <input type="text" 
                name="title" 
                placeholder="Add ToDo..."
                style={{flex: '10', padding: '5px'}}
                value={this.state.title}
                onChange={this.handleClick}
                />
                <input type="submit" 
                value="Submit" 
                className="button" 
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

//PropTypes
AddToDo.propTypes = {
    addToDo: PropTypes.func.isRequired
}

export default AddToDo