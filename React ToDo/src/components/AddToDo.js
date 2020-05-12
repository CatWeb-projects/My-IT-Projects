import React from 'react'

class AddToDo extends React.Component {
    render() {
        return (
            <form style={{display: 'flex'}}>
                <input type="text" 
                name="title" 
                placeholder="Add ToDo..."
                style={{flex: '10', padding: '5px'}}/>
                <input type="submit" 
                value="Submit" 
                className="button" 
                style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddToDo