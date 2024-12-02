// Events Module

// Node.js has a built-in module, called "Events",
// Where you can create-,fire-,and listen for- your own events.
// Example 1 - Registering for the event to be fired only one time using once.
// Example 2 - Create an event emitter instance and register a couple of callbacks.
// Example 3 - Registering for the event with callback parameters

const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyname", () => {
//   console.log("your name is Manisha");
// });

// event.on("sayMyname", () => {
//   console.log("your name is Prabhakar");
// });

// event.on("sayMyname", () => {
//   console.log("your name is Nawalakhe");
// });

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

// event.emit("sayMyname");
event.emit("checkPage", 200, ok);

// the concept is quite simple: emitter objects emit named events that cause previously registered listeners to be called. So,an emitter object basically has two main features:

// Emitting name events.
// Registering and unregistering listener functions.
