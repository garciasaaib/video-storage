/*Estos son los manejadores de la data, redireccionan al metodo y mandan la data para cambiar el estado*/

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});
