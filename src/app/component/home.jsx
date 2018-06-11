import React, { Component } from 'react';

const name = 'Jimmie';

export default class HomeComponent extends Component {
    render(){
        return (
            <div>
                <img width="200" src="static/img/logo/ayjc.jpg" alt=""/>
                <h1>Hello, {name}</h1>
            </div>
        )
    }
}