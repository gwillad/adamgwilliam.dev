import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/resume.png';
import './Resume.css';

export default class Resume extends React.Component {
    render () {
        return (
            <div className="container">
                <Link to="/assets/AdamGwilliamResume.pdf" target="_blank" download>
                    <img className="resume" title="click to download" src={resume} alt="resume for Adam Gwilliam"/>
                </Link>
            </div>
        );
    }
}