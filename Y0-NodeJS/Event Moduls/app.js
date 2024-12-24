//What is Event Module?
//How can we use it?

//? what is event ?
//- click and trigger function onClick,onHover
//- nodejs
//1.create custom events,
//2.fire(emit)
//3.listen(on)

//? Real Example:
//dooorball -> event
//pressing doorball -> event trigger/fire/emit
//handle event -> listen

//A-it will give a class
const EventEmiter = require('events')

//B-create instance of that class
const event = new EventEmiter();

//D-if the event trigger then we have to handleit or listen it
//SYNTAX - EVENT.ON("EVENT NAME","CALLBACK FUNC")

//?A-if parameter dont have
event.on("doorbell", () => {
    console.log("Kon hai?")
})

//?B- if parameter have then
event.on("doorbell", (value) => {
    if(value === "Sakshi")
    console.log("Ha Sakshi Aa Rahi hu! ")
})

//?For Async Event proof
console.log("Hey")

//C-for fire/trigger
//SYNTAX->EVENT.EMIT("EVENTNAME","ONE VALUE/PARAMETET")
//- THIS VALUE PARAMETER AUTOMATIC ACCEPT BY CALLBACK FUNCTION OF EVENT.ON
event.emit("doorbell","Sakshi")


//in js for one vent we can send one function only ,here we can give event loisten function multiple time

// so in nodejs we can write muttiple function trigger handle or listen by multiple handlers and do multiple works

// this whole event handling process in done asyncronous .