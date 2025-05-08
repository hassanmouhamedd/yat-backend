const express = require ("express");
const { routes }= require("./routes/users");
const { routes }= require("./routes/product");

const server = express();

server.use("/user", routes);

server.use("/product", routes);

server.use((req ,res) =>{
    console.log("invalid");
});

/*server.listen(3000,() =>{
  //  console.log("app running");
});*/
module.exports=server;