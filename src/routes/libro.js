const express = require("express");
const router = express.Router();
const userSchema = require("../models/libro");


//CREAR LIBRO
router.post("/libros", (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//OBTENER LOS LIBROS
router.get("/libros", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//ENCONTRAR UN LIBRO ESPECIFICO
router.get("/libros/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//ACTUALIZAR LIBRO
router.put("/libros/:id", (req, res) => {
    const { id } = req.params;
    const { TITULO, AUTOR, GENERO, AÑO_DE_PUBLICACION, ESTANTE} = req.body;
    userSchema
        .updateOne({ _id: id}, { $set:{TITULO, AUTOR, GENERO, AÑO_DE_PUBLICACION, ESTANTE} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//ELIMINAR LIBRO
router.delete("/libros/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
