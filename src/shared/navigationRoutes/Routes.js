import React from 'react';
import App from '../App.js';
import FrontPage from '../pages/FrontPage.js';
import Upload from '../adminViews/UploadComp.js';
import Resume from '../pages/aboutMe/Resume.js';
import Nvidia from '../pages/portfolio/Nvidia.js';
import Carousel from '../components/Carousel.js';
import Gallery from '../adminViews/GalleryComp.js';

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
                path: '/upload',
                exact: true
            },
            {
                ...Resume,
                path: '/resume',
                exact: true
            },
            {
                ...Nvidia,
                path: '/nvidia',
            },
						{
								...Gallery,
								path: '/gallery',
								exact: true,
						}
        ]
    }
]
