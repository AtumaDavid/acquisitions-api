import logger from '#config/logger.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

export const jwtToken = {
  sign: payload => {
    try {
      return jwt.sign({ data: payload }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
      });
    } catch (error) {
      logger.error('Failed to authenticate token', error);
      throw new Error('Error generating token');
    }
  },
  verify: token => {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return decoded;
    } catch (error) {
      logger.error('Failed to verify token', error);
      throw new Error('Invalid token');
    }
  },
};
