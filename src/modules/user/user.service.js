import jwt from 'jsonwebtoken';

export const getMe = (token) => {
  try {
    const isValid = jwt.verify(token, process.env.JWT_SECRET);
    return isValid;
  }
  catch (error) {
    return {
      error: 'Token inválido'
    }
  };
  
};