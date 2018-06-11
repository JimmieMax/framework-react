import React, { Component } from 'react';

export default class PostMessageComponent extends Component  {
    render() {
        return (
            `<div>
                <h1 className="header">page B</h1>
                <input type="text" id="inp" value="some contents..">
                <button onClick="send()">send</button>
            </div>`
        );
    }
}