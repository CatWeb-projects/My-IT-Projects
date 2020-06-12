import React from 'react'
import './App.css'
import Header from './components/layout/Header'
import Logo from './components/layout/Logo'
import axios from 'axios'
import ImagesObj from './components/ImagesObj'
import './components/Images.css'


class App extends React.Component {

  

  // componentDidMount() {
  //   axios.get('https://images.unsplash.com')
  //   .then(response => this.setState({ getImages: response.data}))
  // }



  render() {
    return (
      <div className="App">
        <Header />
        <Logo />
        <div className="images-block">
          <ImagesObj />
        </div>
      </div>
    )
  }
}

export default App;
