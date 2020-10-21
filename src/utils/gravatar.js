import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formatteEmail = (email).trim().toLowerCase(); //trim elimina espacios
  const hash = md5(formatteEmail, { encoding: 'binary' }); //el correo decodificado
  return `${base}${hash}`; //en conjunto hacen el link hasheado de donde obtenemos la imagen
};

export default gravatar;
