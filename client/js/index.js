var Game = {
    "particles": {
        "up": 0,
        "down": 0,
        "gluon": 0,
        "electron": 0,
        "proton": 0,
        "neutron": 0
    },
    "atoms": {

    }
}

let saveFromLocalStorage = localStorage.getItem("save")
if(saveFromLocalStorage != null) {
    Game = JSON.parse(saveFromLocalStorage)
}

//add the particles amounts to the screens on the right spot
document.getElementById("rightPart-particles-up").innerHTML = document.getElementById("rightPart-particles-up").innerHTML + Game.particles.up
document.getElementById("rightPart-particles-gluon").innerHTML = document.getElementById("rightPart-particles-gluon").innerHTML + Game.particles.gluon
document.getElementById("rightPart-particles-down").innerHTML = document.getElementById("rightPart-particles-down").innerHTML + Game.particles.down
document.getElementById("rightPart-particles-electron").innerHTML = document.getElementById("rightPart-particles-electron").innerHTML + Game.particles.electron
document.getElementById("rightPart-particles-proton").innerHTML = document.getElementById("rightPart-particles-proton").innerHTML + Game.particles.proton
document.getElementById("rightPart-particles-neutron").innerHTML = document.getElementById("rightPart-particles-neutron").innerHTML + Game.particles.neutron



//set an interval to update each 5 seconds the amount of particles acording to 1/3 chance of getting one of them each time
loop = setInterval(() => {
    let randomquark = Math.floor((Math.random() * 4) + 1);
    if (randomquark === 1) {
        Game.particles.up = Game.particles.up + 1;
        document.getElementById("rightPart-particles-up").innerHTML = (document.getElementById("rightPart-particles-up").innerHTML).split(":")[0] + ": " + Game.particles.up
    } else if (randomquark === 2) {
        Game.particles.down = Game.particles.down + 1;
        document.getElementById("rightPart-particles-down").innerHTML = (document.getElementById("rightPart-particles-down").innerHTML).split(":")[0] + ": " + Game.particles.down
    } else if (randomquark === 3) {
        Game.particles.electron = Game.particles.electron + 1;
        document.getElementById("rightPart-particles-electron").innerHTML = (document.getElementById("rightPart-particles-electron").innerHTML).split(":")[0] + ": " + Game.particles.electron
    } else {
        Game.particles.gluon = Game.particles.electron + 1;
        document.getElementById("rightPart-particles-gluon").innerHTML = (document.getElementById("rightPart-particles-gluon").innerHTML).split(":")[0] + ": " + Game.particles.gluon
    }
}, 50000000);

function showCraftMenu() {
    document.getElementById("middlePart-iframe").style.display = "flex" 
    fetch("craft.html").then(data => data.text()).then(data => {
        document.getElementById('middlePart-iframe').innerHTML = `<div id="middlePart-iframe-iframe">${data}</div>`
    })
    getParticles.style.display = "none"
}

function showPeriodicTableMenu() {
    document.getElementById("middlePart-iframe").style.display = "flex" 
    fetch("periodicTable.html").then(data => data.text()).then(data => {
        document.getElementById('middlePart-iframe').innerHTML = `<div id="middlePart-iframe-iframe">${data}</div>`
        loadPeriodicTable()
    })
    getParticles.style.display = "none"
}


function putIndexPage() {
    document.getElementById("middlePart-iframe").style.display = "none" 
    document.getElementById("middlePart-iframe").innerHTML = "."
    getParticles.style.display = "block"
}

let particleTimeSpawn = 7

setInterval(() => {
    const randomParticle = Math.floor((Math.random() * 4) + 1);

    let randomThing = Math.floor((Math.random() * 6) + 1);
    let randomHeight = Math.floor(Math.random() * 50);
    console.log(randomThing)
    document.getElementById("getParticles").innerHTML = `<button id="getParticles-particle" onclick="addParticles(${randomParticle})"></button>`
    document.getElementById(`getParticles-particle`).style.marginTop = randomHeight + "%"
    document.getElementById(`getParticles-particle`).style.animation = "particleMovement" + randomThing + " " + particleTimeSpawn + "s"
}, 7 * 1000)


function addParticles(particleNumber) {
    let particle = ""
    if (particleNumber == 1) {
        particle = "electron"
    } else if (particleNumber == 2) {
        particle = "down"
    } else if (particleNumber == 3) {
        particle = "up"
    } else if(particleNumber == 4){
        particle = "gluon"
    }
    Game.particles[particle] += 1
    document.getElementById("rightPart-particles-" + particle).innerHTML = (document.getElementById("rightPart-particles-" + particle).innerHTML).split(":")[0] + ": " + Game.particles[particle]
    document.getElementById("getParticles-particle").remove()

}
