import express from 'express';
import LivrosController from '../controllers/livrosController.js';

const router = express.Router();

router
  .get('/api/livros', LivrosController.listarLivros)
  .get('/api/livros/:id', LivrosController.listarLivroPorId)
  .post('/api/livros', LivrosController.cadastrarLivro)
  .put('/api/livros/:id', LivrosController.atualizarLivro)
  .delete('/api/livros/:id', LivrosController.excluirLivro);

export default router;
