const express = require("express");
const livroController = require("../controllers/livroController");

const router = express.Router();

router.get("/", livroController.listarLivros);
router.get("/:id", livroController.buscarLivros);
router.post("/", livroController.criarLivros);
router.put("/:id", livroController.atualizarLivros);
router.delete("/:id", livroController.excluirLivros);

module.exports = router;
