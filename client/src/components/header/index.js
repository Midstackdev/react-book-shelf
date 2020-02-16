import React, { Component } from 'react'
import FontAwesom from 'react-fontawesome'
import { Link } from 'react-router-dom'

import Nav from './sideNav'


class Header extends Component {

    state = {
        showNav: false
    }

    onHideNav = () => {
        this.setState({
            showNav: false
        })
    }

    render() {
        return (
            <header>
                <div className="open_nav">
                    <FontAwesom 
                        onClick={() => this.setState({ showNav: true })}
                        name="bars"
                        style={{
                            color:'#fff',
                            padding: '10px',
                            cursor: 'pointer'
                        }}
                    />
                </div>
                
                <Nav 
                    showNav={this.state.showNav}
                    onHideNav={() => this.onHideNav()}
                />

                <Link to="/" className="logo">
                    The Book Shelf
                </Link>
               
            </header>
        )
    }
}

export default Header