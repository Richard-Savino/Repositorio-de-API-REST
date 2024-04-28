//INICIO DE SERVIDOR
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/libro");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 9000;

app.listen(port, () => console.log("EL SERVIDOR ESCUCHA EN EL PUERTO", port));

//middleware
app.use(express.json());
app.use("/api", userRoutes);


//ROUTES    
app.get("/", (req, res) => {
    res.send("BIENVENIDOS A MI API");
});

//CONEXION MONGOOSE
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("CONEXION A MONGODB ATLAS"))
.catch((error) => console.error(error));