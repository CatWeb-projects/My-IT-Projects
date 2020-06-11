import React from 'react'

class AuthPanel extends React.Component {
    render() {
        return(
            <div className="panel-container">
                <a href=""><i className="far fa-compass"></i></a>
                <a href=""><i className="far fa-heart"></i></a>
                <a href=""><i className="far fa-user"></i></a>
            </div>
        )
    }
}

export default AuthPanel