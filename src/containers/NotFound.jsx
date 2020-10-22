import React from 'react';
import { Link } from 'react-router-dom';

//el tag a se cambia por Link para que no se refresque la pagina

const Notfound = () => (
  <>
    <section className='register'>
      <h1 className='text-notfound'>404</h1>
      <h2 className='text-notfound'>Page Not Found</h2>
      <Link to='/'>Go Back</Link>
    </section>
  </>
);

export default Notfound;
