
const net = require('node:net');
const readline =require('readline-sync')

const server = net.createServer();




server.on('connection' , (socket)=>{
    socket.on('data', (data)=> {
       
        console.log("Cliente: " + socket.address().address +" " + data)
        socket.write(" "  + " " + data)
    })

    socket.on('close', ()=>{
        console.log("Comunicacion finalizada")
    })

    socket.on('error', (err) => {
        console.log(err.message)
    })
} )



server.listen(4000, () =>{
    console.log("El servidor esta escuchando en  la puerta: " , server.address().port)
})