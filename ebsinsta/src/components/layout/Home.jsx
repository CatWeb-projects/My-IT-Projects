import React from 'react'

class Home extends React.Component {
    state = {
        instaLink: 'www.instagram.com',
        headerTitle: 'Instagram'
    }
    render() {
        const {instaLink, headerTitle} = this.state
        return (
            <div className="insta-container">
                <div className="insta">
                    <a href={instaLink}><i className="fab fa-instagram"></i></a>
                </div>
               <div className="insta-text">
                    <a href={instaLink}><h2>{headerTitle}</h2></a>
               </div>
            </div>
        )
    }
}

export default Home