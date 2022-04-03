import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './error.css'

export class Pagenotfound extends Component {
    render() {
        return (
            <div className="errorpage">
                <h1>Page not found:  Error 404
                    <br />
                Go to: <NavLink to="/" className="errornav">Home</NavLink>
                </h1>
            </div>
        )
    }
}

export default Pagenotfound
