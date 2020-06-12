import React from 'react'

class Home extends React.Component {
    render() {
        return (
            <div className="insta-container">
                <div className="insta">
                <a href="www.instagram.com"><i className="fab fa-instagram"></i></a>
                </div>
               <div className="insta-text">
                   <a href="www.instagram.com"><h2>Instagram</h2></a>
               </div>
            </div>
        )
    }
}

export default Home