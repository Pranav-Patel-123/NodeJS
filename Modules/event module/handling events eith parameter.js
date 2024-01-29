const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Handling Events with Parameters
myEmitter.on('dataReceived', (data) => {
  console.log('Data received:', data);
});

myEmitter.emit('dataReceived', { message: 'Sample data', timestamp: new Date() });
