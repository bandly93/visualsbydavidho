import React from 'react';
import App from '../App.js';
import FrontPage from '../pages/FrontPage.js';
import Upload from '../adminViews/UploadComp.js';
import Resume from '../pages/aboutMe/Resume.js';

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
            },
            {
                ...Resume,
                path: '/resume',
                exact: true
            }
        ]
    }
]
