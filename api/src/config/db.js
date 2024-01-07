//Usuario - omarmontoya
//Contraseña - Holamundo1
const mongoose = require("mongoose");
const urilocal = "mongodb://mongo:27017/docker-node-mongo";
const uriremota =
  "mongodb+srv://omarmontoya:Holamundo1@clusteromr.mlox5ph.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(urilocal)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
