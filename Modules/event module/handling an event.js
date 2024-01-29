const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Handling an Event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emitting an Event
myEmitter.emit('greet', 'John');
