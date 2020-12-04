import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import iconPlus from '../assets/static/plus-icon.png';
import iconPlay from '../assets/static/play-icon.png';
import iconRemove from '../assets/static/delete-icon.png';
import { setFavorite, deleteFavorite } from '../actions';

const CarouselItem = (props) => {

  //obtenemos todos los datos del GlobalState
  const { id, cover, title, year, contentRating, duration, isList, itExists } = props;

  /* metodo SetFavorite: cuando se presione el boton agregar, se mandan estos datos
  mediante la funcion vinculada al state */
  const handleSetFavorite = (itemId) => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  /* cuando se presiona el boton borrar se corre la funcion deleteFavorite
  que esta conectada con el State y mediante el id identifica que debe borrar */
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`player/${id}`}>
            <img className='carousel-item__details--img' src={iconPlay} alt='Play Icon' />
          </Link>
          {
            !isList ? (
              <img
                className='carousel-item__details--img'
                src={iconPlus}
                alt='Plus Icon'
                onClick={() => handleSetFavorite(id)}
              />
            ) : (
              <img
                className='carousel-item__details--img'
                src={iconRemove}
                alt='Remove Icon'
                onClick={() => handleDeleteFavorite(id)}
              />
            )
          }
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration} minutos`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

// declaramos las funciones que queremos que esten conectadas
// el segundo parametro es para editar el estado
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
