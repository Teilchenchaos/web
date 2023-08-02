var Game = {
    "particles": {
        "up": 0,
        "down": 0,
        "electron": 0,
        "proton": 0,
        "neutron": 0
    }
}

window.onload = function () {
    //add the particles amounts to the screens on the right spot
    document.getElementById("rightPart-particles-up").innerHTML = document.getElementById("rightPart-particles-up").innerHTML + Game.particles.up
    document.getElementById("rightPart-particles-down").innerHTML = document.getElementById("rightPart-particles-down").innerHTML + Game.particles.down
    document.getElementById("rightPart-particles-electron").innerHTML = document.getElementById("rightPart-particles-electron").innerHTML + Game.particles.electron
    document.getElementById("rightPart-particles-proton").innerHTML = document.getElementById("rightPart-particles-proton").innerHTML + Game.particles.proton
    document.getElementById("rightPart-particles-neutron").innerHTML = document.getElementById("rightPart-particles-neutron").innerHTML + Game.particles.neutron
}


//set an interval to update each 5 seconds the amount of particles acording to 1/3 chance of getting one of them each time
loop = setInterval(() => {
    let randomquark = Math.floor((Math.random() * 3) + 1);
    if (randomquark === 1) {
        Game.particles.up = Game.particles.up + 1;
        document.getElementById("rightPart-particles-up").innerHTML = (document.getElementById("rightPart-particles-up").innerHTML).split(":")[0] + ": " + Game.particles.up
    } else if (randomquark === 2) {
        Game.particles.down = Game.particles.down + 1;
        document.getElementById("rightPart-particles-down").innerHTML = (document.getElementById("rightPart-particles-down").innerHTML).split(":")[0] + ": " + Game.particles.down
    } else {
        Game.particles.electron = Game.particles.electron + 1;
        document.getElementById("rightPart-particles-electron").innerHTML = (document.getElementById("rightPart-particles-electron").innerHTML).split(":")[0] + ": " + Game.particles.electron
    }
}, 10 * 1000);

function showCraftMenu() {
    fetch("craft.html").then(data => data.text()).then(data => {
        document.getElementById('middlePart-iframe').innerHTML = `<div id="middlePart-iframe-iframe">${data}</div>`
    })

}