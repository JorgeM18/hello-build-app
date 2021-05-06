import React from 'react';
import s from './Login.module.css';
import { useHistory } from 'react-router-dom';
import {Form, Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';

const Login = () => {

  const history = useHistory();
  const clickHandler = () => history.push('/');

  return (
    <>
      <div className={s.Princont}>
        <div onClick={()=> clickHandler()} className={s.labelCont}>          
          <div className={s.labelIcon}><FontAwesomeIcon icon={faHome} />  </div>  
          <h3>Home</h3>                
        </div>
      <Container className={s.ContPrin}>
        
        <div className={s.ContLog}>
          <h1>Login</h1>
          <div className={s.logo}>
          <img src={logo} alt="logo"/>
          </div>
        </div>
        <div className={s.contFrom}>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Control className={s.input} size="lg" type="email" placeholder="E-mail" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control className={s.input} size="lg" type="password" placeholder="Password" />
          </Form.Group>
        </Form>
        <Button className={s.button2} size="lg" block>
          LOGIN
        </Button>
        <div className={s.button1}>
           <Link to="/register" style={{color: 'white'}} >NEW USER</Link> 
        </div>

        </div>
        
      </Container>

      </div>
     
      
    </>
  )
}

export default Login;