const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    testamento: {
      type: String,
      required: true
    },
    capitulos: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("livro", livroSchema);
