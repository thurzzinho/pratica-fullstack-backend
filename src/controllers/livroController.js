const Livro = require("../models/Livro");

async function listarLivros(req, res) {
  try {
    const livros = await Livro.find();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarLivros(req, res) {
  try {
    const livro = await Livro.findById(req.params.id);

    if (!livro) {
      return res.status(404).json({ mensagem: "Livro não encontrado" });
    }

    res.json(livro);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function criarLivros(req, res) {
  try {
    const livro = await Livro.create(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarLivros(req, res) {
  try {
    const livro = await Livro.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!livro) {
      return res.status(404).json({ mensagem: "Livro não encontrado" });
    }

    res.json(livro);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirLivros(req, res) {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);

    if (!livro) {
      return res.status(404).json({ mensagem: "Livro não encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarLivros,
  buscarLivros,
  criarLivros,
  atualizarLivros,
  excluirLivros
};
