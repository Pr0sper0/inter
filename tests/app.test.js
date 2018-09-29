import React, { Component } from 'react';
import ReactDom from 'react-dom';
import app from './app';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOMunmountComponentAtNode(div);
})