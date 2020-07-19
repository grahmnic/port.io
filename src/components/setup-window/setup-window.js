import React from 'react';
import './setup-window.scss';
import Button from '../base-components/button/button.js';
import Radio from '../base-components/radio/radio.js';

const setupOptions = [
    {name: "Express", value: 0},
    {name: "Potato", value: 1}
];

export default class SetupWindow extends React.Component {
    confirm = () => {
        alert("TEST");
    }

    render() {
        return (
            <div className="setup-wrapper">
                <div className="setup-left">
                    <img src=""/>
                </div>
                <div className="setup-right">
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