import React, { Component } from 'react';
import HomeComponent from './component/home.js'

export default class App extends Component {
    render() {
        return (
            <div>
                Hello World!
                Hello webpack-dev-server!
                Hello React!
                <HomeComponent/>
            </div>
        );
    }
}