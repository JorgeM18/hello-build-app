import React from 'react';
import Nav from '../Nav/Nav';
import Slider from '../Slider/Slider';
import s from './Home.module.css';


const Home = () => {
  return (
    <>
      <div className={s.mainCont}>
        <Nav />
        <Slider />
      </div>
    </>
  );
}

export default Home