import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <i className="fas fa-search"></i><input type="text" placeholder="Search"/>
            </div>
        )
    }
}

export default Search