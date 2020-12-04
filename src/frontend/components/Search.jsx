import React from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../actions';

const Search = (props) => {

  const handleInput = (event) => {
    props.searchRequest(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        name='search'
        type='text'
        className='input'
        placeholder='Buscar...'
        onChange={handleInput}
      />
    </section>
  );
};
const mapDispatchToProps = {
  searchRequest,
};
export default connect(null, mapDispatchToProps)(Search);
