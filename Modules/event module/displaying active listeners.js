const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Displaying Active Listeners
console.log('Number of Listeners for "greet":', myEmitter.listenerCount('greet'));
