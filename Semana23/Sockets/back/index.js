const express=require('express');
const socketio=require('socket.io');
const http=require('http');

const PORT=process.env.PORT || 5000;

const router=require('./routes');

const app=express();

app.use(router);

const server =http.createServer(app);
const io=socketio(server);

io.on('connection',(socket)=>{
    console.log("Conectado!!!");
    socket.on('join',({name,room},callback)=>{
        console.log(name,room);
        const error=true;
        if(error){
            callback({error:'algo ha pasado :('});
        }
    });

    socket.on('disconnect',()=>{
console.log("desconectado");

    });
})

server.listen(PORT,()=>{
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
    
});
