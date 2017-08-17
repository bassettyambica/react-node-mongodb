import React, { Component } from "react";

class Landing extends Component {
    render() {
        return (
            <div className="row" style={{width: 200, margin: 100}}>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Survey App</span>
                    <p>Connect with your users for more response!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
