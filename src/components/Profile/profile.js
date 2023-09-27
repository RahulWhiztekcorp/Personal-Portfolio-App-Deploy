import React from 'react';
import './profile.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Profile = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span>I'm <span className='introName'>Rahul Kondi</span><br />Fullstack Developer</span>
                <p className='introPara'>Hello, my name is RAHUL KONDI, I'm a full stack developer.<br/> With 0.6 years of experience in web development.</p>
                <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire me</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>
    )
}

export default Profile