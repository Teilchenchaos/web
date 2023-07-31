var Up = 0
document.getElementById("particles-up").innerHTML = document.getElementById("particles-up").innerHTML + Up
var Down = 0
document.getElementById("particles-down").innerHTML = document.getElementById("particles-down").innerHTML + Down
var Electron = 0
document.getElementById("particles-electron").innerHTML = document.getElementById("particles-electron").innerHTML + Electron

loop = setInterval(() => {
    let randomquark = Math.floor((Math.random() * 3) + 1);
    if (randomquark === 1) {
      Up = Up + 1;
      document.getElementById("particles-up").innerHTML = (document.getElementById("particles-up").innerHTML).split(":")[0] + ": " + Up
    } else if(randomquark === 2) {
      Down = Down + 1;
      document.getElementById("particles-down").innerHTML = (document.getElementById("particles-down").innerHTML).split(":")[0] + ": " + Down
    } else {
      Electron = Electron + 1;
      document.getElementById("particles-electron").innerHTML = (document.getElementById("particles-electron").innerHTML).split(":")[0] + ": " + Electron
    }
}, 5000);
