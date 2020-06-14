import React from 'react'
import './App.css'
import Header from './components/layout/Header'
import Logo from './components/layout/Logo'
import axios from 'axios'
import ImagesObj from './components/ImagesObj'
import './Styles.css'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


class App extends React.Component {

  

  // componentDidMount() {
  //   axios.get('https://images.unsplash.com')
  //   .then(response => this.setState({ getImages: response.data}))
  // }



  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Logo />
          <Route path="/">
            <div className="images-block">
              <ImagesObj />
            </div>
          </Route>
        </div>

        {/* <Route path="/images">
          <ImagesObj />
        </Route> */}

      </Router>
     
    )
  }
}

export default App;
