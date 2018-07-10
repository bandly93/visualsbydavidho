import React from 'react';
import App from '../App.js';
import FrontPage from '../pages/FrontPage.js';
import UploadPic from '../pages/UploadPic.js';

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
                ...UploadPic,
                path: '/admin',
                exact: true
            }
        ]
    }
]