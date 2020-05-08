import React from 'react';
import './banner.scss';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="banner">
                <div className="banner-link">
                    About
                </div>
                <div className="banner-link">
                    Potato
                </div>
                <div className="banner-link">
                    Resume
                </div>
            </div>
        );
    }
}