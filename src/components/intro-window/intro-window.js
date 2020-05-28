import React from 'react';
import './intro-window.scss';

// ASSETS
import beach1 from '../../assets/images/beach1.png';
import beach2 from '../../assets/images/beach2.png';
import beach3 from '../../assets/images/beach3.png';
import beach4 from '../../assets/images/beach4.png';

export default class IntroWindow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imgArr = [beach1, beach2, beach3, beach4];
        const imgStyle = {
            backgroundImage: `url(${imgArr[Math.floor(Math.random() * imgArr.length)]})`
        }

        return (
            <div className="image-wrapper">
                <div className="image-div" id="imgDiv" style={imgStyle}></div>
            </div>
        );
    }
}