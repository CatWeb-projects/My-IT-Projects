import React from 'react'
import ImageItem from './ImageItem'
// import PropTypes from 'prop-types'

class ImagesObj extends React.Component {

    state = {
        getImages: [
            {
                id: 1,
                title: 'Laos',
                imgUrl: 'https://globalgrasshopper.com/wp-content/uploads/2012/01/10-of-the-most-beautiful-places-to-visit-in-Laos.jpg'
              },
            {
                id: 2,
                title: 'Quill',
                imgUrl: 'https://img.travelawaits.com/filter:centercrop/quill/8/8/4/3/e/4/8843e4ec1a29a142e2b435da1b3677736ceeaeea.jpg?w=800&h=800'
              },
            {
                id: 3,
                title: 'Watterfalls',
                imgUrl: 'https://www.onetravelgirl.com/wp-content/uploads/2018/11/Most-Beautiful-Waterfalls-in-the-World.jpg'
            },
            {
                id: 4,
                title: 'Waterfalls Hero',
                imgUrl: 'https://thumbor.thedailymeal.com/PnWoaM4J8rdCs_NpmRwBIZoBy5c=//https://www.theactivetimes.com/sites/default/files/2020/03/06/139841-waterfalls_hero.jpg'
            },
            {
                id: 5,
                title: 'Amazing Nature',
                imgUrl: 'https://ipt.imgix.net/196855/x/0/8-dnvnyj-fototur-svrno-siyani-i-ldyany-pshtry.jpg'
            },
            {
                id: 6,
                title: 'Lavender Fields',
                imgUrl: 'https://www.marinareservation.com/articles/wp-content/uploads/2017/02/Lavender-fields-cover.jpg'
            },
            {
                id: 7,
                title: 'Autumn',
                imgUrl: 'https://i.pinimg.com/originals/fd/cd/e0/fdcde0c504f2607137aca7dcd8c0028b.jpg'
            },
            {
                id: 8,
                title: 'Safari',
                imgUrl: 'https://cdn.wallpapersafari.com/72/89/yhtnpw.jpg'
            },
            {
                id: 9,
                title: 'Deserts',
                imgUrl: 'https://wallpaperaccess.com/full/632198.jpg'
            }
        ]     
    
    }


    render() {
        return this.state.getImages.map((image) => (
            <ImageItem key={image.id} imageProp = {image}/>
        ))
    }
}

//PropTypes
// ImagesObj.propTypes = {
//     getImages: PropTypes.array.isRequired,
// }

export default ImagesObj