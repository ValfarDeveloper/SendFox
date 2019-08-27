import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

class HomeContent extends Component {
    render() {
        return (
            <div className="row links-container align-items-center justify-content-center h-100 m-0">
                <div className="col-12 col-lg-6">
                    <Card className="home-cards">
                        <a className="icon-container d-flex align-items-center justify-content-center flex-column" href={javascriptBackVars.createMailTemplateRoute}>
                            <i className="icon fas fa-envelope-open-text"></i>
                            <div className="icon-text">Create your mail template</div>
                        </a>
                    </Card>
                </div>
                <div className="col-12 col-lg-6">
                    <Card className="home-cards">
                        <a className="icon-container d-flex align-items-center justify-content-center flex-column" href={javascriptBackVars.indexMailTemplatesRoute}>
                            <i className="icon fas fa-journal-whills"></i>
                            <div className="icon-text">See your mail templates</div>
                        </a>
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
