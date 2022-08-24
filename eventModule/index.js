const EventEmitter = require('events');

const event = new EventEmitter();

event.on('testEvent',()=>{
    console.log('event fired');
});

event.emit('testEvent');

event.on('arg',(msg)=>{
    console.log(`your message is ${msg}`);
});

event.emit('arg','ok');
