import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ search, mylist, trends, originals }) => {
  return (
    <div className='app'>
      <Search
        isHome //var in state
      />

      {search.length > 0 && (
        <Categories title='Mi busqueda'>
          <Carousel>
            {search.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList={true}
              />
            ))}
          </Carousel>
        </Categories>
      )}

      {mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem
                key={item.id}
                isList={true}
                {...item}
              />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) =>
            <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {originals.map((item) =>
            <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </div>
  );
};

// de esta manera declaramos las listas del state global que queremos
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};

// al momento de exportar es donde obtenemos los datos del estado
// obtenemos el state como props en el componente
// esto es posible mediante conect
export default connect(mapStateToProps, null)(Home);

// export default Home;
