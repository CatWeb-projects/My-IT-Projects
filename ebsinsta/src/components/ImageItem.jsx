import React from 'react'

class ImageItem extends React.Component {
    render() {
        const {title, imgUrl, linkUrl} = this.props.imageProp
        return (
            <div className="image-container">
                <a href={linkUrl}><img src={imgUrl} alt={title} /></a>
            </div>
        )
    }
}

export default ImageItem