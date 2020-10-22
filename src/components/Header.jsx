import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //conecta el GeneralState
import classNames from 'classnames';
import { logoutRequest } from '../actions'; //va y borra el usuario del state
import gravatar from '../utils/gravatar';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {

  const { user, isLogin, isRegister } = props; //obtenemos del state el user

  const hasUser = Object.keys(user).length > 0; //verificamos si existe en realidad uyn user
  //esto lo usamos para seleccionar la imagen de usuario

  const handleLogOut = () => { //funciopn que borra el user del state
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img
            src={hasUser ? gravatar(user.email) : userIcon}
            alt={hasUser ? user.email : 'imagen de usuario'}
          />
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><Link to='/'>{user.name}</Link></li> :
            null}
          {hasUser ?
            <li><a href='#logout' onClick={handleLogOut}>Cerrar Sesión</a></li> :
            <li><Link to='/login'>Iniciar Sesión</Link></li>}

        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => { //para obtener el usuario
  return {
    user: state.user,
  };
};

const mapDispatchToProps = { //para sobreescribir el usuario
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
