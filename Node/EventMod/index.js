const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName',()=>{
    console.log("Name is Himanshu");
})

event.emit('sayMyName')

// with parameter
event.on('checkStatus', (statusCode, message) => {
  console.log(`Status code is ${statusCode} and ${message}`);
});

event.emit("checkStatus",200,'ok')