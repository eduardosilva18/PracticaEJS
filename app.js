const http = require("http");
const express = require("express");
const app = express();

app.get('/',(req,res)=> {

    res.send("Iniciamos servidor");
})

const puerto =3000 ;
app.listen(puerto,()=>{

    console.log("Escuchando");
});