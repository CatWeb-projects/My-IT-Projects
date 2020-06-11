import React from 'react'
import Home from './Home'
import Search from './Search'
import AuthPanel from './Auth-info'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <Home />
                <Search />
                <AuthPanel />
            </div>
        )
    }
}

export default Header