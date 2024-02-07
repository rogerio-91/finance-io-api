import { Router } from "express";
import { getAll, getOne, save, update, remove } from "./index.js";
import { authMiddleware } from '../../middleware/authMiddleware.js'

const router = Router();

router.get('/', authMiddleware, async (req, res) => {
  const data = await getAll(req.user.id);
  res.status(200).json({ data });
});

router.get('/:id', authMiddleware, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const data = await getOne(id, req.user.id);
    if (!data) {
      res.status(404).json({ error: 'Transação não encontrada' });
      return;
    }
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  if (req.user && req.user.id) {
    req.body.user_id = req.user.id;
    const data = await save(req.body);
    res.status(201).json({ data });
  } else {
    // Caso não haja um usuário autenticado
    res.status(401).json({ error: 'Transação não autorizada' });
  }
});


router.put('/:id', authMiddleware, async (req, res) => {
  req.body.user_id = req.user.id;
  const data = await update(req.params.id, req.body, req.user.id );
  res.status(200).json({ data });
});

router.delete('/:id', authMiddleware, async (req, res) => {
  const data = await remove(req.params.id, req.user.id);
  res.status(200).json({ data });
});


export default router;