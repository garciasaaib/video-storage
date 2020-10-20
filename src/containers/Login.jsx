import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Inicia sesión</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            Recuérdame
          </label>
          <br />
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} />
          <p>Inicia sesión con Google</p>
        </div>
        <div>
          <img src={twitterIcon} />
          <p>Inicia sesión con Twitter</p>
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta? 
        <Link to='/register'><b>Regístrate</b></Link>
      </p>
    </section>
  </section>
);
export default Login;
