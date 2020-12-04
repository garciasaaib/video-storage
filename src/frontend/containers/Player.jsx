import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';

const Player = (props) => {

  //esto nos lo manda react-router-dom mendiante la ruta que construimos
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  //Logica para ver si tenemos el video o no

  useEffect(() => {
    props.getVideoSource(id);
  }, []); //[] hace que solo se ejecute una vez al entrar a la pagina

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button onClick={() => props.history.goBack()}>Go Back</button>
      </div>
    </div>
  ) : (
    setTimeout(<Redirect to='/404/' />, 1000)
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
