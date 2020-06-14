import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class ImageItem extends React.Component {
    render() {
        const {title, imgUrl} = this.props.imageProp
        return (
            <div className="image-container">
                <a href={imgUrl}><img src={imgUrl} alt={title} /></a>
            </div>
        )
    }
}

//PropTypes
ImageItem.propTypes = {
    imageProp: PropTypes.object.isRequired,
}

export default ImageItem