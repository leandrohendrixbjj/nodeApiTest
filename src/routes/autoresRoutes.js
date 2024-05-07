import express from 'express';
import AutoresController from '../controllers/autoresController.js';

const router = express.Router();

router
  .get('/api/autores', AutoresController.listarAutores)
  .get('/api/autores/:id', AutoresController.listarAutorPorId)
  .get('/api/autores/:id/livros', AutoresController.listarLivrosPorAutor)
  .post('/api/autores', AutoresController.cadastrarAutor)
  .put('/api/autores/:id', AutoresController.atualizarAutor)
  .delete('/api/autores/:id', AutoresController.excluirAutor);

export default router;
