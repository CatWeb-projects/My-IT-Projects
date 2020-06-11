import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({counterProp, numberProp, stringProp, funcProp}) => {
  console.log(counterProp, numberProp, stringProp, funcProp)
  return <h1>{`Counter component. Counter value is: ${counterProp}`}</h1>
}

Counter.propTypes = {
  counterProp: PropTypes.number.isRequired,
  numberProp: PropTypes.number,
  stringProp: PropTypes.string,
  funcProp: PropTypes.func
}

Counter.defaultProps = {
  funcProp: () => {},
  numberProp: 0,
  stringProp: ''
}

class CounterButton extends React.Component {
  state = {
    counter: 0
  }
  
  handleClick = () => {
    this.setState(({counter}) => ({
      counter: ++counter
    }))
  }
  render() {
    const {counter} = this.state

    return(
      <div>
        <div>{counter}</div>
        <Counter 
        counterProp={counter}
        // numberProp={1}
        // stringProp="str"
        // funcProp={() => {}}
        />
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

export default CounterButton