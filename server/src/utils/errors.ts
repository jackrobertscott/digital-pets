import config from '../config';

export const errorHandler = error => {
  if (error.extensions && error.extensions.code === 'INTERNAL_SERVER_ERROR') {
    if (config.production) {
      // send to error capture software
    } else {
      console.log(error);
    }
  }
  return error;
};
