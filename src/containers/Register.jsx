import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom'; //el tag a se cambia por Link para que no se refresque la pagina

//mediante props se accede al globalstate
const Register = (props) => {
  
  const [form, setValues] = useState({ //estas variables seran las de form
    name: '',
    email: '',
    password: '',
  })

  const handleInput = (event) => { //cada cambio en el form se refleja en la data por setValues
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => { //al hacer click en el boton 
    event.preventDefault(); //previene que 
    props.registerRequest(form); //accede al set value de redux de registerRequest, el valor es form
    props.history.push('/'); //se redirecciona a la ruta /
  }

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name="name"
            className='input' 
            type='text' 
            placeholder='Nombre' 
            onChange={handleInput}
          />
          <input
            name="email"
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name="password"
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button'>Registrarme</button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = { //setters de redux que usaremos
  registerRequest,
};

//se conectan los setters con el globalState
export default connect(null, mapDispatchToProps)(Register);
