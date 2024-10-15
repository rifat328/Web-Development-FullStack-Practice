function anotherEventListener(typeOffEvent,callBack){

    //Detect Event Code.

    var eventThatHappend={
        eventType:"keypress",
        key: "p",
        duration:"2sec"
    }

    if (eventThatHappend == typeOffEvent){
        callBack=eventThatHappend;
    }
}