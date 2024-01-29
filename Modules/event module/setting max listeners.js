const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Setting Max Listeners
myEmitter.setMaxListeners(3);
