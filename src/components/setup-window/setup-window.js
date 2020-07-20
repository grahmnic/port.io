import React from 'react';
import './setup-window.scss';
import setupImg from '../../assets/images/setup.JPG';
import Button from '../base-components/button/button.js';
import Radio from '../base-components/radio/radio.js';

const setupOptions = [
    {name: "Express", value: 0, description: "View my portfolio how it was intended to be viewed."},
    {name: "Potato", value: 1, description: "View a potato version of my portfolio without the clutter."}
];

export default class SetupWindow extends React.Component {
    confirm = () => {
        alert("TEST");
    }

    render() {
        return (
            <div className="setup-wrapper">
                <div className="setup-left">
                </div>
                <div className="setup-spacing"></div>
                <div className="setup-right">
                    <div className="setup-title"></div>
                    <div className="setup-radio">
                        <Radio direction="column" options={setupOptions}/>
                    </div>
                    <div className="setup-btns">
                        <Button width="6rem" height="1.5rem" before={"<"} disabled>Back</Button>
                        <Button width="6rem" height="1.5rem" callback={this.confirm} after={">"}>Next</Button>
                    </div>
                </div>
            </div>
        );
    }
}