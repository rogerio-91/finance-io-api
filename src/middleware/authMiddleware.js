import jwt from 'jsonwebtoken';
import { getOne } from '../modules/user/index.js'

export const authMiddleware =  async (req, res, next) => {

  try {
    const isValid = jwt.verify(req.token, process.env.JWT_SECRET);
    const user = await getOne(isValid.id)
    req.user = user;
    next();
  }
  catch (error) {
      return res.status(403).json({ message: 'Token inválido' });
  };

}

export default authMiddleware;