import jwt from 'jsonwebtoken';

import config from '../config';

export const decode = (token: string) => {
  return jwt.verify(token, config.token.secret);
};

export const encode = (data: any) => {
  return jwt.sign(data, config.token.secret);
};
