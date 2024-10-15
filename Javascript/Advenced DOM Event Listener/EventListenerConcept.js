function anotherEventListener(typeOffEvent, callBack) {
    // Detect Event Code.
    var eventThatHappend = {
        eventType: "keypress",
        key: "p",
        duration: "2sec"
    }
    
    if (eventThatHappend.eventType == typeOffEvent) {
        callBack(eventThatHappend); // Call the callback with the event object
    }
}

anotherEventListener("keypress", function (event) {
    console.log(event); // This should now log the event object to the console
});


anotherEventListener("keypress", function (event) {
    console.log(event.key); // This should now log the event object to the console
});