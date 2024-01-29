const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Error Event
myEmitter.on('error', (err) => {
  console.error('Error:', err.message);
});

myEmitter.emit('error', new Error('Something went wrong'));
