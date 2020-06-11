import React from 'react' 

class Logo extends React.Component {
    state = {
        logoSrc: 'https://static2.clutch.co/s3fs-public/logos/download.png',
        title: 'ebsintegrator'
    }


    render() {
        const {logoSrc, title} = this.state
        return (
            <div className="logo-container">
                <a href="/"><img src={logoSrc} alt=""/></a>
                <div className="logo-title-of-insta">
                    <h1>{title}</h1>
                </div>
            </div>
        )
    }
}

export default Logo