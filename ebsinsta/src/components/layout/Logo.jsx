import React from 'react'
import './Logo.css'

class Logo extends React.Component {
    state = {
        logoSrc: 'https://static2.clutch.co/s3fs-public/logos/download.png',
        title: 'ebsintegrator',
        number: '113'
    }


    render() {
        const {logoSrc, title, number} = this.state
        return (
            <div className="logo-container">
                <a href="/"><img src={logoSrc} alt=""/></a>
                <div className="logo-title-of-insta">
                    <h1>{title}</h1>
                    <h4>{number} followers</h4>
                </div>
            </div>
        )
    }
}

export default Logo