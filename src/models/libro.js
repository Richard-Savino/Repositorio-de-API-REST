const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    TITULO: {
        type: String,
        required: true
    },
    AUTOR:{
        type: String,
        required: true
    },
    GENERO:{
        type: String,
        required: true
    },
    AÑO_DE_PUBLICACION:{
        type: Number,
        required: true
    },
    ESTANTE:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("libro", userSchema);