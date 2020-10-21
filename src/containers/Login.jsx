import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //previene el refrescar la pagina
    //console.log(form); //vemos en consola si funciona
    props.loginRequest(form);
    props.history.push('/'); //renderiza la direccion principal
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Inicia sesión</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button type='submit' className='button'>Iniciar sesión</button>
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
};

const MapDispatchToProps = {
  loginRequest,
};

export default connect(null, MapDispatchToProps)(Login);
