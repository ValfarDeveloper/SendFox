import React, { Component } from "react";
import ReactDOM from "react-dom";

class HomeContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div>Home content :D !</div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("home-content")) {
    ReactDOM.render(<HomeContent />, document.getElementById("home-content"));
}

export default HomeContent;
