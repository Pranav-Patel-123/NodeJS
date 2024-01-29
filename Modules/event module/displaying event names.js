const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Displaying Event Names
console.log('Event Names:', myEmitter.eventNames());
