import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173"
    }
});

let persons = [];
const addPerson = (personData, socketId) =>{
    !persons.some(person => person.sub == personData.sub) && persons.push(
        {...personData, socketId}
        )
}


io.on('connection', (socket) => {
    console.log("connected to server");

    socket.on('addPerson', personData => {
        addPerson(personData);
        io.emit("getPerson",persons);
    })

});



httpServer.listen(3001, () => {
    console.log('Socket.IO server is running on http://localhost:3001');
});