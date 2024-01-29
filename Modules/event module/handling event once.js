const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Handling Events Once
myEmitter.once('greetOnce', () => {
  console.log('This will only execute once.');
});

myEmitter.emit('greetOnce');
myEmitter.emit('greetOnce'); // This won't trigger the handler again
