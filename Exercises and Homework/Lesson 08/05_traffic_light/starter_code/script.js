// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

//change the colors on the stop light

function turnOff(){
    //when one color is active all other must be inactive
document.querySelector('#stopLight').classList.remove("stop");
document.querySelector('#slowLight').classList.remove("caution");
document.querySelector('#goLight').classList.remove("go");
}
//green
function go(){
    turnOff()
    document.querySelector('#goLight').classList.add('go');
}
//yellow
function caution(){
    turnOff()
    document.querySelector('#slowLight').classList.add('caution');
}
//red
function stop(){
    turnOff()
    document.querySelector('#stopLight').classList.add('stop');
}

document.getElementById('stopButton').addEventListener('click', stop);
document.getElementById('slowButton').addEventListener('click', caution);
document.getElementById('goButton').addEventListener('click', go);