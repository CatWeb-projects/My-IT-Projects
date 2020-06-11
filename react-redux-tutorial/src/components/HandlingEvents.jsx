import React from 'react'
import PropTypes from 'prop-types'

const MyLink = ({text, onClickProp}) => (
    <a href="/test" onClick={onClickProp}>{text}</a>
)

MyLink.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

MyLink.defaultProps = {
    text: 'link',
    onClick: () => {}
}

class HandlingEvents extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <MyLink onClick={this.handleClick}/>
        )
    }
}

export default HandlingEvents