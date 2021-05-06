import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import s from './Slider.module.css';

const Slider = () => {
  const history = useHistory();
  const refInputS1 = useRef();
  const refInputS2 = useRef();
  const refInputS3 = useRef();
  const refSlider = useRef();
  const clickHandler = () => history.push('/register');
  const sliderHandler = () => {
    if (refInputS2.current.checked) refSlider.current.style.marginLeft = "-33.33%";
    else if (refInputS3.current.checked) refSlider.current.style.marginLeft = "-66.66%";
    else refSlider.current.style.marginLeft = "0%";
    console.log(refInputS1.current.checked);
    console.log(refInputS2.current.checked);
    console.log(refInputS3.current.checked);
  };
  return (
    <>
      <div onChange={sliderHandler} >
        <input type="radio" name="slider" id="s1" readOnly ref={refInputS1} />
        <input type="radio" name="slider" id="s2" readOnly ref={refInputS2} />
        <input type="radio" name="slider" id="s3"  readOnly ref={refInputS3} />
      </div>
      <div className={s.mainCont}>
        <div className={`${s.sliderCont} ${s.first}`} ref={refSlider}>
          <div className={s.jumboCont}>
            <h1>Welcome to Build-Hub!</h1>
            <h3>GitHub repositories and events organizer</h3>
            <p>Your favorites repos and upcoming events in one place! <br/> What are you waiting for? </p>
            <button onClick={()=> clickHandler()}>Register Now</button>
          </div>
          <label htmlFor='s2' className={`${s.labelCont} ${s.firstLabel}`}>
            <h3> Not convinced yet ?</h3>
            <div className={s.labelIcon}><FontAwesomeIcon icon={faChevronCircleRight} /></div>
          </label>
        </div>
        <div className={`${s.sliderCont} ${s.second}`}>
          <div className={s.jumboCont}>
            <h1>Welcome to Build-Hub!</h1>
            <h3>Your personal gitHub repositories and events organizer</h3>
            <p>Your favorites repos and upcoming events in one place! <br/> What are you waiting for? </p>
            <button onClick={()=> clickHandler()}>Register Now</button>
          </div>
          <div className={`${s.labelCont} ${s.secondLabel}`}>
            <label htmlFor='s1' className={s.labelIcon}><FontAwesomeIcon icon={faChevronCircleLeft} /></label>
            <label htmlFor='s3' className={s.labelIcon}><FontAwesomeIcon icon={faChevronCircleRight} /></label>
          </div>
        </div>
        <div className={`${s.sliderCont} ${s.third}`}>
          <div className={s.jumboCont}>
            <h1>Welcome to Build-Hub!</h1>
            <h3>Your personal gitHub repositories and events organizer</h3>
            <p>Your favorites repos and upcoming events in one place! <br/> What are you waiting for? </p>
            <button onClick={()=> clickHandler()}>Register Now</button>
          </div>
          <div className={`${s.labelCont} ${s.thirdLabel}`}>
            <label htmlFor='s2' className={s.labelIcon}><FontAwesomeIcon icon={faChevronCircleLeft} /></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;