const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Removing an Event Listener
const onData = (data) => {
  console.log('Data received:', data);
};

myEmitter.on('data', onData);

myEmitter.emit('data', 'Data 1');
myEmitter.removeListener('data', onData);
myEmitter.emit('data', 'Data 2'); // This won't trigger the handler
