import React from 'react';

//el tag a se cambia por Link para que no se refresque la pagina
import { Link } from 'react-router-dom';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <Link to='/login'>
          <button className='button'>Registrarme</button>
        </Link>
      </form>
      <Link to='/login'>Iniciar sesión</Link>
    </section>
  </section>
);

export default Register;
