import React, { Component } from 'react';
import styles from '../../css/Resume.css';
import FrontPage from '../FrontPage.js';

class Resume extends Component {
    render() {
        return(
            <div className="resume">
                <p className="content"><strong><u>David Ho</u></strong></p>
                <p className="content"><strong>Resume/ Portfolio</strong></p>
                <p className="content">-</p>
                <p className="content">Bay Area to LA</p>
                <p className="content">-</p>
                <p className="content">Photographer and Camera Operator</p>
                <p className="content">-</p>
                <p className="content">Production for <strong>DSOTM Photography and Design</strong></p>
                <p className="content">Visuals for <strong>Brix&Mrtr</strong> - brixandmrtr.com</p>
                <p className="content">Published for <strong>Content Magazine</strong></p>
                <p className="content">-</p>
                <p className="content">Brands I've worked with: </p>
                <p className="content"><strong>Nvidia, Content Magazine, Brix&Mrtr, Lure & Till, DSPTCH, Self Edge, 
                    Taylor & Stitch, Bow and Arrow, Boba Guys, Gopanche, Scout SF Agency, JE model Agency, 
                    Stars Model Management, Adobe, Facebook, PBS, SJ made, Kooltura Marketing, FutureArtsNow!, 
                    KQED, City of San Jose, Knight Foundation, and FameSJ2017</strong></p>
                <p className="content">-</p>
                <p className="content">Booking & Inquiries</p>
                <p className="content">VisualsbyDavidHo@gmail.com</p>
            </div>
        )
    }
}

export default {
    component: Resume
}