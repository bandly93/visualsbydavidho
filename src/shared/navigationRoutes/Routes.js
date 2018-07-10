import React from 'react';
import App from '../App.js';
import FrontPage from '../pages/FrontPage.js';
import Upload from '../adminViews/UploadComp.js';

export default [
    {
        ...App,
        routes: [
            {
                ...FrontPage,
                path: '/',
                exact: true
            },
            {
                ...Upload,
                path: '/admin',
                exact: true
            }
        ]
    }
]
