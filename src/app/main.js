import React from 'react';
import { render } from 'react-dom';
import App from './app'

const renderDom = Component => {
    render(
        <Component />,
        document.getElementById('app')
    );
};
renderDom(App);