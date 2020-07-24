import React from 'react';
import './setup-window.scss';
import setupImg from '../../assets/images/icons/3d-computer.ico';
import setupGif from '../../assets/images/earth.gif';
import Button from '../base-components/button/button.js';
import Radio from '../base-components/radio/radio.js';

import LoaderContext from '../../contexts/LoaderContext.js';

const setupOptions = [
    {name: "Express", value: 1, description: "View my portfolio how it was intended to be viewed."},
    {name: "Potato", value: 2, description: "View a potato version of my portfolio without the clutter."}
];

export default class SetupWindow extends React.Component {
    constructor(props) {
        super(props);
        this.radio = React.createRef();
    }

    static contextType = LoaderContext;

    confirm = () => {
        if(this.radio.current.state.value === "1") {
            this.context.createLoader({
                width: "fit-content",
                height: "",
                title: "PortDOS Startup",
                modules: [
                    {module: "Phase 1", value: 6},
                    {module: "Phase 2", value: 6},
                    {module: "Phase 3", value: 12}
                ],
                length: 24
            });
        }
    }

    render() {
        return (
            <div className="setup-wrapper">
                <div className="setup-left">
                    <div>
                        <img src={setupImg} alt="3d-computer"/>
                    </div>
                    <div>
                        If you're looking for an experienced fullstackoverflow dev, you've come to the right place. 
                        <br/><br/>
                        <div><span>D</span><span>o</span><span>w</span><span>n</span><span>l</span><span>o</span><span>a</span><span>d</span></div>
                        <div><span>p</span><span>o</span><span>r</span><span>t</span><span style={{fontSize: "2rem"}}>&#8228;</span><span>i</span><span>o</span> <span>n</span><span>o</span><span>w</span><span>!</span></div>
                    </div>
                    <div>
                        <img src={setupGif} alt="spinning-earth"/>
                    </div>
                </div>
                <div className="setup-spacing"></div>
                <div className="setup-right">
                    <div className="setup-title">PortDOS <span style={{color: "red"}}>a</span>0.1</div>
                    <div className="setup-body">
                        <span>Quick Links</span>
                        <a target="_blank" href="mailto:grahmnic@gmail.com">email</a>
                        <a target="_blank" href="https://www.linkedin.com/in/nickschen/">linkedin</a>
                        <a target="_blank" href="https://github.com/grahmnic">github</a>
                        <a target="_blank" href="https://trello.com/b/t9kwuwyX/portfolio2020">trello</a>
                    </div>
                    <div className="setup-radio">
                        <Radio ref={this.radio} direction="column" options={setupOptions}/>
                    </div>
                    <div className="setup-desc">
                        Welcome to the PortDOS a0.1 Setup Wizard! To begin, please select which version of PortDOS you would like to view.<br/><br/>Once you select a version, click Next to proceed.
                    </div>
                    <div className="setup-btns">
                        <Button width="6rem" height="1.5rem" before={"<"} mode={true}>Back</Button>
                        <Button width="6rem" height="1.5rem" callback={this.confirm} after={">"} >Next</Button>
                    </div>
                </div>
                <div className="setup-spacing"></div>
            </div>
        );
    }
}