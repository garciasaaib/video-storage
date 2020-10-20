import React from 'react';

//el tag a se cambia por Link para que no se refresque la pagina
import { Link } from 'react-router-dom';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h1 className='text-notfound'>404</h1>
      <h2 className='text-notfound'>Page Not Found</h2>
      <Link to="'/'">Go Back</Link>
    </section>
  </section>
);

export default Register;
