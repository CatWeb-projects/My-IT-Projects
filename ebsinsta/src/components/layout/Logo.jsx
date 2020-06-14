import React from 'react'

class Logo extends React.Component {
    state = {
        logoSrc: 'https://static2.clutch.co/s3fs-public/logos/download.png',
        title: 'ebsintegrator',
        number: '113',
        logoLink: '/'
    }


    render() {
        const {logoSrc, title, number, logoLink} = this.state
        return (
            <div className="logo-container container">
                <div className="col-3 ">
                    <a href={logoLink}><img src={logoSrc} alt=""/></a>
                </div>
                <div className="logo-title-of-insta col-6 offset-2">
                    <h1>{title}</h1>
                    <h4>{number} followers</h4>
                </div>
            </div>
        )
    }
}

export default Logo