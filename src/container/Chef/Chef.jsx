import React from 'react';
import { images } from '../../constants';
import './Chef.css';
import { SubHeading } from '../../components';



import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>


    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>


      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="" />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className='p__opensans'>
          Dolor sit amet consectetur adipisicing elit. Eius, rerum quisquam iure eos, ipsum nam neque culpa pariatur rem, alias dolores vel?Harum aliquam repellendus, iste laborum laboriosam provident dolorem!
        </p>
      </div>


      <div className='app__chef-sign'>
        <p>Al Mamun Ridoy</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>


    </div>
  </div>
);

export default Chef;
