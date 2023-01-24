const net = require('node:net');
const readline = require('readline-sync')

const options = {
    port: 4000,
    host: '192.168.190.35'
}

const client = net.createConnection(options);

client.on('connect', () =>{
    console.log("Conexion completa")
    console.log("Conexion de IP: " + client.address().address)
    sendLine()
} )
client.on('data', (data)=>{
    console.log(" "+ data)
    sendLine()
})
client.on('error', (err)=>{
    console.log(err.message)
})

function sendLine(){
    var line = readline.question('Pone algo boludo : ')
    if (line == "0"){
         client.end()
    }else {
        client.write(line)
    }

}