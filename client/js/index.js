
//defines variables for the particles amounts
var Up = 0
var Down = 0
var Electron = 0

window.onload = function() {
    //add the particles amounts to the screens on the right spot
    document.getElementById("rightPart-particles-up").innerHTML = document.getElementById("rightPart-particles-up").innerHTML + Up
    document.getElementById("rightPart-particles-down").innerHTML = document.getElementById("rightPart-particles-down").innerHTML + Down
    document.getElementById("rightPart-particles-electron").innerHTML = document.getElementById("rightPart-particles-electron").innerHTML + Electron
}


//set an interval to update each 5 seconds the amount of particles acording to 1/3 chance of getting one of them each time
loop = setInterval(() => {
    let randomquark = Math.floor((Math.random() * 3) + 1);
    if (randomquark === 1) {
      Up = Up + 1;
      document.getElementById("rightPart-particles-up").innerHTML = (document.getElementById("rightPart-particles-up").innerHTML).split(":")[0] + ": " + Up
    } else if(randomquark === 2) {
      Down = Down + 1;
      document.getElementById("rightPart-particles-down").innerHTML = (document.getElementById("rightPart-particles-down").innerHTML).split(":")[0] + ": " + Down
    } else {
      Electron = Electron + 1;
      document.getElementById("rightPart-particles-electron").innerHTML = (document.getElementById("rightPart-particles-electron").innerHTML).split(":")[0] + ": " + Electron
    }
}, 5*1000);