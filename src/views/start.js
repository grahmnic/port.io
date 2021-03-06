import React from 'react';
import './start.scss';

import Window from '../components/window/window.js';
import SetupWindow from '../components/setup-window/setup-window.js';

export default class StartView extends React.Component {
    test = (id) => {
        alert(id);
    }

    render() {
        return (
            <div className="start-root">
                <Window width="40rem" height="30rem" title="Setup Wizard" >
                    <SetupWindow />
                </Window>
            </div>
        )
    }
}