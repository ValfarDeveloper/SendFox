import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

class HomeContent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-lg-6">
                    <Card className="home-cards">
                        <a href={javascriptBackVars.createMailTemplateRoute}>Create your mail template</a>
                    </Card>
                </div>
                <div className="col-12 col-lg-6">
                    <Card className="home-cards">
                        <a href={javascriptBackVars.indexMailTemplatesRoute}>See your mail templates</a>
                    </Card>
                </div>
            </div>
        );
    }
}

if (document.getElementById('home-content')) {
    ReactDOM.render(<HomeContent />, document.getElementById('home-content'));
}

export default HomeContent;
