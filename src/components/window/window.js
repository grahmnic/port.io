import React from 'react';
import './window.scss';

// ASSETS
import beach1 from '../../assets/images/beach1.png';
import beach2 from '../../assets/images/beach2.png';
import beach3 from '../../assets/images/beach3.png';
import beach4 from '../../assets/images/beach4.png';

export default class Window extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.width = this.props.width;
        this.height = this.props.height;
    }

    render() {
        let imgArr = [beach1, beach2, beach3, beach4];
        const imgStyle = {
            backgroundImage: `url(${imgArr[Math.floor(Math.random() * imgArr.length)]})`
        }

        return (
            <div className="window" style={{
                width: this.props.width,
                height: this.props.height
            }}>
                <div className="modalHandle">
                    Port.io a0.11
                    <div className="modalBar">
                        <div className="modalBtn">
                            <i class="fas fa-minus"></i>
                        </div>
                        <div className="modalBtn">
                            <i class="fas fa-question"></i>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="image-wrapper">
                        <div className="image-div" id="imgDiv" style={imgStyle}></div>
                    </div>
                    <div className="section">
                        VIBE
                    </div>
                </div>
            </div>
        );
    }
}