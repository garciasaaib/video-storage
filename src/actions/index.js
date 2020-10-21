/*Estos son los manejadores de la data, redireccionan al metodo y mandan la data para cambiar el estado*/

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

// este es el metodo que accedera al estado con LOGIN_REQUEST
export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({ //cierra sesion
  type: 'LOGOUT_REQUEST',
  payload,
});
