const reducer = (state, action) => {

  switch (action.type) { //redirecciona al metodo declarado
    //return: es en esencia regresa el state obtenido

    case 'SET_FAVORITE':
      return {
        ...state, //obtener el state actual
        mylist: state.mylist //toma el state actual de mylist
          //comparamos los id de la lista con el id obtenido por props de la funcion
          .filter((item) => item.id === action.payload.id) //payload son los props
          .length === 0 ? //verificamos que ninguno coincida
          [...state.mylist, action.payload] : //no coincide = mandamos la lista + el payload
          [...state.mylist], //si coincide = mandamos solo la lista
      };

    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) || state.originals.find((item) => item.id === Number(action.payload)) || [],
      };

    default: return state; //aqui simplemente regresamos el estado tal cual se recibe
  }
};

export default reducer;
