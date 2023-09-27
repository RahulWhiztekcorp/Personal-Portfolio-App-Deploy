import React from 'react';
import './skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I skilled and passinate dot net fullstack developer with experience</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is demo text ,you can write your Own </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website design</h2>
                    <p>This is demo text ,you can write your Own </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App design</h2>
                    <p>This is demo text ,you can write your Own </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill