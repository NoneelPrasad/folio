import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
    return (
        <div className="about"> 
            <div className='about-top'>
                <div className='about-info'>
                    Hello There ✌, I am 
                    <br/> <span className='info-name'>Noneel Prasad</span>
                    
                    <br/>Imagine Programmers WITHOUT stackoverflow ¯\_(ツ)_/¯
                </div>
                <div className='about-photo'>
                    <img src={require('../../../assets/coding.gif').default} className="about-picture"/>
                </div>
            </div>
            <div className='about-bottom'>
                <SocialContact/>
            </div>
        </div>
    )
}

export default About
