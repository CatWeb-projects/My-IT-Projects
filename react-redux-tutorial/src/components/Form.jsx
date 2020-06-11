import React from 'react'

class Form extends React.Component {
    state = {
        inputText: '',
        textareaText: '',
        showData: {
            name: '',
            text: ''
        }
    }

    handleInputChange = ({ target: {value} }) => {
        this.setState({
            inputText: value
        })
    }

    handleTextareaChange = ({ target: {value} }) => {
        this.setState({
            textareaText: value
        })
    }

    handleShow = (e) => {
        e.preventDefault()
        const {inputText, textareaText} = this.state
        this.setState({
            inputText: '',
            textareaText: '',
            showData: {
                name: inputText,
                text: textareaText
            }
        })
    }

    render() {
        const {inputText, textareaText, showData} = this.state
        const {name, text} = showData
        return (
            <form>
                <label>
                    Name:
                    <input type="text" value={inputText} onChange={this.handleInputChange}/>
                </label><br/>
                <label htmlFor="text">Text:</label>
                <textarea id="text" value={textareaText} onChange={this.handleTextareaChange}></textarea><br/>
                <button onClick={this.handleShow}>Show</button><br/>
                <h2>{name}</h2>
                <h3>{text}</h3>
            </form>
        )
    }
}

export default Form