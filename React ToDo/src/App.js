import React from 'react'
import './App.css'
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'
import About from './components/pages/About'
import Header from './components/layout/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => this.setState({ todos: response.data}))
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Del Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    this.setState({ todos: [ ...this.state.todos.filter(todo => todo.id !== id)] })
    // .then(response => this.setState({ todos: [ ...this.state.todos.filter(todo => todo.id !== id, response.data)] }))  - this is to wait the respond from server
  }

  //Add Todo
  addToDo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',  {
      title,
      completed: false
    })
    .then(response => this.setState({ todos: [...this.state.todos, response.data] }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddToDo addToDo={this.addToDo}/>
              <Todos todos={this.state.todos}
               markComplete={this.markComplete}
               delTodo={this.delTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}

export default App;
