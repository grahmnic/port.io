import React from 'react';
import './setup-window.scss';
import Button from '../base-components/button/button.js';

export default class SetupWindow extends React.Component {
    confirm = () => {
        alert("TEST");
    }

    render() {
        return (
            <div className="setup-wrapper">
                <Button width="4rem" height="1.5rem" text="Next" callback={this.confirm}/>
            </div>
        );
    }
}