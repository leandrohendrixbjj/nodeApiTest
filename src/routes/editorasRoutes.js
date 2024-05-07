import express from 'express';
import EditorasController from '../controllers/editorasController.js';

const router = express.Router();

router
  .get('/api/editoras', EditorasController.listarEditoras)
  .get('/api/editoras/:id', EditorasController.listarEditoraPorId)
  .get('/api/editoras/:id/livros', EditorasController.listarLivrosPorEditora)
  .post('/api/editoras', EditorasController.cadastrarEditora)
  .put('/api/editoras/:id', EditorasController.atualizarEditora)
  .delete('/api/editoras/:id', EditorasController.excluirEditora);

export default router;
