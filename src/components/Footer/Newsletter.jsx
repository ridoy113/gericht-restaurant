import React from 'react';
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';
// import { bgimg } from '../../assets/bg.png'




const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h1 className='headtext__cormorant'>Subscribe To Our <br /> Newsletter</h1>
      <p className='p__opensans'>And never miss latest update</p>


    </div>


    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter Your E-mail Address' />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
