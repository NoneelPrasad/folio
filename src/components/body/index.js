import React from 'react'
import About from './about'
import './body.css'
import Contact from './contact'
import Project from './project'
import Skills from './skill'
import Work from './work'
function Body() {
    return (
        <div className='body'>
             <section id='about'>
                 <About/>
             </section>
             <section id='projects'>
                 <Project/>
             </section>
             <section id='skills'>
                 <Skills/>
             </section>
             <section id='work'>
                 <Work/>
             </section>
             <section id='contact'>
                 <Contact/>
             </section>
        </div>
    )
}

export default Body
